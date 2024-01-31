import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import GoogleAnalytics from '../libs/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL( process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000" ),

  title: 'ChargEra | Bornes de recharge pour Véhicules Electriques',
  description: 'Chez ChargEra, nous sommes passionnés par la promotion du changement positif dans le domaine de la mobilité durable. Notre aventure a commencé avec une idée simple mais puissante : rendre la recharge des véhicules électriques plus accessible, abordable et respectueuse de l&apos;environnement.',
  keywords: ['EV charging', 'peer-to-peer charging', 'electric vehicle', 'charging stations', 'sustainable transport', 'green energy', 'ChargEra' ],

  other: {
    'google-adsense-account': 'ca-pub-2338681498281829',
  },

  generator: 'ChargEra',
  applicationName: 'ChargEra',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'ChargEra' }, { name: 'ChargEra', url: '/' }],
  creator: 'ChargEra',
  publisher: 'ChargEra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ChargEra | Bornes de recharge pour Véhicules Electriques',
    description: 'Chez ChargEra, nous sommes passionnés par la promotion du changement positif dans le domaine de la mobilité durable. Notre aventure a commencé avec une idée simple mais puissante : rendre la recharge des véhicules électriques plus accessible, abordable et respectueuse de l&apos;environnement.',
    /* siteId: '1467726470533754880',*/
    creator: '@chargera',
    /* creatorId: '1467726470533754880',*/
    images: ['/chargera.png'],
  },

  openGraph: {
    title: 'ChargEra | Bornes de recharge pour Véhicules Electriques',
    description: 'Chez ChargEra, nous sommes passionnés par la promotion du changement positif dans le domaine de la mobilité durable. Notre aventure a commencé avec une idée simple mais puissante : rendre la recharge des véhicules électriques plus accessible, abordable et respectueuse de l&apos;environnement.',
    url: '/',
    siteName: 'ChargEra',
    images: [
      {
        url: '/chargera.png',
        width: 800,
        height: 600,
      },
      {
        url: '/chargera.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons:{
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  /*
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  */

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  /*
  verification: {
    google: 'google',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  */

  category: 'technology',

  alternates: {
    canonical: '/',
    /*
    languages: {
      'en-US': 'https://nextjs.org/en-US',
      'de-DE': 'https://nextjs.org/de-DE',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://nextjs.org/rss',
    },
    */
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2338681498281829" crossOrigin="anonymous"></script>
        {/* <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
