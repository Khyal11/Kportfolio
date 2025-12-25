import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider'; // Import ThemeProvider

export const metadata: Metadata = {
  title: 'Khyal Nayak | Full-Stack Developer & Designer',
  description: 'Professional portfolio showcasing full-stack development projects, skills, and experience.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Web Development', 'UI/UX Design'],
  authors: [{ name: 'Khyal Nayak' }],
  creator: 'Khyal Nayak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Khyal Nayak Portfolio',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630?text=Khyal+Nayak',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khyal Nayak | Full-Stack Developer',
    description: 'Explore my portfolio and projects',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0c3d66" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class" // crucial for Tailwind CSS dark mode
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
