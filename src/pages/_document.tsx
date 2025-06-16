import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/hero-bg.png" type="image/png" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Perssonify - Growth & Scale Solutions" />
        <meta name="description" content="Transform your business with Perssonify's innovative growth and scale solutions. We help companies achieve sustainable growth through cutting-edge strategies and technology." />
        <meta name="keywords" content="business growth, scale solutions, digital transformation, business strategy, innovation, technology solutions" />
        <meta name="author" content="Perssonify" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://perssonify.com/" />
        <meta property="og:title" content="Perssonify - Growth & Scale Solutions" />
        <meta property="og:description" content="Transform your business with Perssonify's innovative growth and scale solutions. We help companies achieve sustainable growth through cutting-edge strategies and technology." />
        <meta property="og:image" content="/images/hero-bg.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://perssonify.com/" />
        <meta property="twitter:title" content="Perssonify - Growth & Scale Solutions" />
        <meta property="twitter:description" content="Transform your business with Perssonify's innovative growth and scale solutions. We help companies achieve sustainable growth through cutting-edge strategies and technology." />
        <meta property="twitter:image" content="/images/hero-bg.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Perssonify" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://perssonify.com/" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}