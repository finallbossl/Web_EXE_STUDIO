import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import ClientOnly from "@/components/ClientOnly";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BookingHub - Nền tảng đặt lịch dịch vụ",
  description: "Kết nối bạn với những dịch vụ tốt nhất",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
         <ClientOnly>
          <AuthProvider>{children}</AuthProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
