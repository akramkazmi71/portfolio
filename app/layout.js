import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Akram Kazmi - Backend Developer',
    description: 'Portfolio of Md Akram Kazmi - Backend Developer specializing in scalable systems and APIs',
    keywords: 'backend developer, software engineer, python, java, sql, portfolio',
    authors: [{ name: 'Md Akram Kazmi' }],
    openGraph: {
        title: 'Akram Kazmi - Backend Developer',
        description: 'Portfolio of Md Akram Kazmi - Backend Developer',
        type: 'website',
    },
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
