import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "One One",
  description: "每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。",
  applicationName: "One One",
  openGraph: {
    title: "One One",
    description: "每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。",
    url: "https://www.oneone.global",
    siteName: "www.oneone.global",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "https://www.oneone.global/link-thumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One One",
    description: "每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。",
    images: ["https://www.oneone.global/link-thumbnail.png"],
  },
  icons: {
    icon: [
      {
        url: '/thumbnail-one-one.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/thumbnail-one-one.png',
    apple: '/thumbnail-one-one.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" type="image/png" href="/thumbnail-one-one.png" />
        <link rel="apple-touch-icon" href="/thumbnail-one-one.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'