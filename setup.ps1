# setup.ps1
$ErrorActionPreference = "Stop"

$PROJECT_NAME = "my-node-api"

Write-Host "🚀 Initializing Node.js Project: $PROJECT_NAME..." -ForegroundColor Cyan

# 1. Create and enter directory
if (-not (Test-Path $PROJECT_NAME)) {
    New-Item -Path $PROJECT_NAME -ItemType Directory | Out-Null
}
Set-Location $PROJECT_NAME

# 2. Initialize NPM
Write-Host "📦 Creating package.json..." -ForegroundColor Yellow
npm init -y | Out-Null

# 3. Install Dependencies
Write-Host "⬇️  Installing dependencies (Express, CORS, Helmet, Dotenv, Morgan)..." -ForegroundColor Yellow
npm install express cors helmet dotenv morgan
npm install -D nodemon

# 4. Create Structure
Write-Host "📂 Scaffolding folder structure..." -ForegroundColor Yellow
New-Item -Path "src/routes" -ItemType Directory -Force | Out-Null
New-Item -Path "src/controllers" -ItemType Directory -Force | Out-Null
New-Item -Path "src/middleware" -ItemType Directory -Force | Out-Null

# 5. Create Files
Write-Host "📝 Creating source files..." -ForegroundColor Yellow

# .gitignore
Set-Content -Path .gitignore -Value @"
node_modules
.env
.DS_Store
"@

# .env
Set-Content -Path .env -Value @"
PORT=3000
NODE_ENV=development
"@

# src/app.js
Set-Content -Path src/app.js -Value @"
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes/index');

const app = express();

app.use(helmet()); // Security
app.use(cors()); // CORS
app.use(morgan('dev')); // Logging
app.use(express.json()); // JSON Parser

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: '🚀 Server is up and running!' });
});

module.exports = app;
"@

# src/server.js
Set-Content -Path src/server.js -Value @"
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`\n⚡️ Server running on http://localhost:\${PORT}\`);
});
"@

# src/routes/index.js
Set-Content -Path src/routes/index.js -Value @"
const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

module.exports = router;
"@

# 6. Update package.json scripts
Write-Host "⚙️  Updating package.json scripts..." -ForegroundColor Yellow
node -e "
  const fs = require('fs');
  const pkg = require('./package.json');
  pkg.scripts.start = 'node src/server.js';
  pkg.scripts.dev = 'nodemon src/server.js';
  fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
"

Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host "----------------------------------------------------"
Write-Host "👉 To start your project, run the following commands:"
Write-Host "   cd $PROJECT_NAME"
Write-Host "   npm run dev"
Write-Host "----------------------------------------------------"