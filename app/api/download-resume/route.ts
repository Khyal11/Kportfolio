// app/api/download-resume/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');
  
  try {
    // Try to find the resume file (case-insensitive)
    const files = await fs.readdir(publicDir);
    const resumeFile = files.find(file => file.toLowerCase() === 'resume.pdf');
    
    if (!resumeFile) {
      return new NextResponse('Resume file not found. Please place your resume.pdf in the public directory.', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }

    const resumePath = path.join(publicDir, resumeFile);
    const fileBuffer = await fs.readFile(resumePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error reading resume file:', error);
    return new NextResponse('Error downloading resume. Please try again later.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}