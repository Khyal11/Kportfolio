# KPortfolio - Elite Portfolio Website

A modern, fully responsive portfolio website built with **Next.js**, **React**, and **Tailwind CSS**. Features dynamic hero sections, smooth animations, project showcase, contact form integration, and dark/light mode support.

## ✨ Features

- **Dynamic Hero Sections**: Switch between 3 different hero styles with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with persistent storage
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Project Showcase**: Display featured projects with images and detailed pages
- **Contact Form**: Integrated with Formspree for email notifications (no backend needed)
- **Resume Page**: Professional resume with experience, education, and certifications
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and code splitting

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Form Service**: Formspree (Email)
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- A **GitHub account**
- A **Vercel account** (for deployment)
- A **Formspree account** (for contact form)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Khyal11/KPortfolio.git
cd KPortfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables Setup

Create a `.env.local` file in the root directory:

```bash
# .env.local

# Contact Form (Formspree)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="KN"

# Social Links (Optional)
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_PHONE=+91-XXXXX-XXXXX
NEXT_PUBLIC_LOCATION=Your City, Your Country
```

### 4. Get Formspree ID

1. Go to [https://formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form and get your **Form ID**
4. Add the ID to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📝 Local Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linting
npm run lint

# Check TypeScript types
npm run typecheck
```

### Project Structure

```
KPortfolio/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page with hero variants
│   ├── globals.css               # Global styles with theme support
│   ├── (routes)/                 # Route groups
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── ...
│   └── api/                      # API routes
│       ├── contact/route.ts      # Contact form handler
│       └── download-resume/      # Resume download
├── components/                   # Reusable React components
│   ├── HeroVariant1.tsx         # Hero style 1
│   ├── HeroVariant2.tsx         # Hero style 2
│   ├── HeroVariant3.tsx         # Hero style 3
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   ├── Button.tsx
│   └── ...
├── lib/                         # Utilities and data
│   ├── projects.json            # Projects data
│   ├── resume.json              # Resume data
│   └── utils.ts
├── public/                      # Static assets
│   ├── profile.jpg
│   └── resume.pdf
├── .env.local                   # Environment variables (local only)
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

### Customizing Content

1. **Update Personal Info**
   - Edit `lib/projects.json` - Add/edit projects
   - Edit `lib/resume.json` - Update experience, education, certifications
   - Edit `public/profile.jpg` - Replace profile image
   - Edit `.env.local` - Update social links

2. **Change Hero Style**
   - Click "⚙️ Hero Style" button in top-right on home page
   - Select from 3 different hero variants

3. **Update Styling**
   - Modify `app/globals.css` for global styles
   - Edit `tailwind.config.ts` for Tailwind configuration
   - Components use inline Tailwind classes

## 🌐 Git Deployment Steps

### Step 1: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Create a new repository named `KPortfolio`
3. Do **NOT** initialize with README, .gitignore, or license (we already have these)

### Step 3: Add Remote and Push

```bash
git remote add origin https://github.com/YOUR-USERNAME/KPortfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Verify on GitHub

- Go to `https://github.com/YOUR-USERNAME/KPortfolio`
- Confirm all files are pushed

## 🚀 Vercel Deployment

### Step 1: Prepare for Deployment

Update `.env.local` values for production in Vercel dashboard (don't commit sensitive values):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

### Step 2: Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click "Add New..." → "Project"
4. Select `KPortfolio` repository
5. Click "Import"

### Step 3: Configure Environment Variables

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following:
   - `NEXT_PUBLIC_FORMSPREE_ID` = `your_formspree_id`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-vercel-domain.com`
   - Other optional variables from `.env.local`
3. Click "Save"

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Your site will be live at `https://YOUR-PROJECT.vercel.app`

### Step 5: Custom Domain (Optional)

1. In Vercel → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## 🔄 Updating After Deployment

### Making Changes Locally

```bash
# Make your changes
npm run dev  # Test locally

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main
```

Vercel will automatically redeploy when you push to `main` branch.

## ⚙️ Environment Variables Reference

| Variable | Purpose | Required | Example |
|----------|---------|----------|---------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Contact form ID | ✅ Yes | `mkowllol` |
| `NEXT_PUBLIC_SITE_URL` | Site domain | ⭕ Optional | `https://yoursite.com` |
| `NEXT_PUBLIC_SITE_NAME` | Site name | ⭕ Optional | `KN` |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile link | ⭕ Optional | URL |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile link | ⭕ Optional | URL |
| `NEXT_PUBLIC_EMAIL` | Contact email | ⭕ Optional | email |

**Note**: Variables with `NEXT_PUBLIC_` prefix are exposed to the browser. Never commit `.env.local` to git.

## 📧 Managing Local Environment

### Never Commit `.env.local`

The `.env.local` file is already in `.gitignore`, but ensure it stays private:

```bash
# Check if .env.local is ignored
git status  # Should NOT show .env.local
```

### Switching Between Environments

**Local Development**:
```bash
# Create .env.local with test values
NEXT_PUBLIC_FORMSPREE_ID=test_id
```

**Production (Vercel)**:
- Set environment variables in Vercel dashboard
- No `.env.local` needed on server

### Managing Secrets

1. **Never commit** passwords, API keys, or secrets
2. Use `.env.local` for local testing only
3. Set production secrets in Vercel dashboard
4. Use environment variables for sensitive data

## 🐛 Troubleshooting

### Contact Form Not Working
- Verify Formspree ID is correct
- Check that `NEXT_PUBLIC_FORMSPREE_ID` is set in `.env.local`
- Test in development: `npm run dev`
- Check browser console for errors

### Images Not Loading
- Ensure image paths exist in `public/` folder
- Check `next.config.ts` for remote image permissions
- Verify image URLs are accessible

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Hydration Errors
- Check browser console for specific component
- Ensure components use `useEffect` for client-only state
- Use `suppressHydrationWarning` if necessary

## 📚 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Formspree](https://formspree.io/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Khyal Nayak**
- GitHub: [@Khyal11](https://github.com/Khyal11)
- Email: khyal725@gmail.com

## 🎯 Next Steps

1. ✅ Customize personal information in `lib/` files
2. ✅ Update social media links in `.env.local`
3. ✅ Add your projects to `lib/projects.json`
4. ✅ Set up contact form with Formspree
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel
7. ✅ Add custom domain (optional)

---

**Happy coding! 🚀**
