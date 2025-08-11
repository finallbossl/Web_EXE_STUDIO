"use client"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useHydration } from "@/hooks/useHydration"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, Palette, Shirt, ChevronDown, Bell, User, Settings, LogOut, Heart, Calendar, Menu } from "lucide-react"
import Image from "next/image"
import ClientOnly from "@/components/ClientOnly"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { user, logout } = useAuth()
  const isHydrated = useHydration()

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span
              className="text-[40px] md:text-[30px] font-bold gradient-text leading-none group-hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Simplesnails" }}
            >
              DepStudio
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Trang chủ
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 nav-link">
                <span>Dịch vụ</span>
                <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-card border-white/20 rounded-xl shadow-xl">
                {[
                  { href: "/studios", icon: Camera, label: "Studio chụp ảnh" },
                  { href: "/makeup", icon: Palette, label: "Makeup & Trang điểm" },
                  { href: "/rental", icon: Shirt, label: "Thuê trang phục" },
                ].map((item) => (
                  <DropdownMenuItem asChild key={item.href}>
                    <Link href={item.href} className="dropdown-item">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/promotions" className="nav-link">
              Ưu đãi
            </Link>
            <Link href="/news" className="nav-link">
              Tin tức
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#FFFDD0] text-black">

                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="hover:text-white/80">Trang chủ</Link>
                  <Link href="/studios" className="hover:text-white/80">Studio chụp ảnh</Link>
                  <Link href="/makeup" className="hover:text-white/80">Makeup & Trang điểm</Link>
                  <Link href="/rental" className="hover:text-white/80">Thuê trang phục</Link>
                  <Link href="/promotions" className="hover:text-white/80">Ưu đãi</Link>
                  <Link href="/news" className="hover:text-white/80">Tin tức</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* User Actions */}
          <ClientOnly fallback={
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" className="nav-btn" asChild>
                <Link href="/login">Đăng nhập</Link>
              </Button>
              <Button className="bg-gradient-button hover:opacity-90" asChild>
                <Link href="/register">Đăng ký</Link>
              </Button>
            </div>
          }>
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Button variant="ghost" size="sm" className="icon-btn">
                    <Bell className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                      <Avatar className="w-8 h-8 border border-white/20 hover:border-white/40 transition-all">
                        <AvatarImage src={user.avatar || "/placeholder.svg?height=32&width=32"} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block text-left">
                        <div className="text-sm font-medium text-white">{user.name}</div>
                        <Badge variant="secondary" className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500">
                          {user.membershipLevel}
                        </Badge>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 glass-card border-white/20 rounded-xl shadow-xl">
                      {[
                        { href: "/profile", icon: User, label: "Hồ sơ cá nhân" },
                        { href: "/bookings", icon: Calendar, label: "Lịch đã đặt" },
                        { href: "/favorites", icon: Heart, label: "Yêu thích" },
                        { href: "/settings", icon: Settings, label: "Cài đặt" },
                      ].map((item) => (
                        <DropdownMenuItem asChild key={item.href}>
                          <Link href={item.href} className="dropdown-item">
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuItem
                        onSelect={logout}
                        className="dropdown-item text-red-400 hover:text-red-300"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Đăng xuất</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="hidden md:flex items-center space-x-2">
                  <Button variant="ghost" className="nav-btn" asChild>
                    <Link href="/login">Đăng nhập</Link>
                  </Button>
                  <Button className="bg-gradient-button hover:opacity-90" asChild>
                    <Link href="/register">Đăng ký</Link>
                  </Button>
                </div>
              )}
            </div>
          </ClientOnly>
        </div>
      </div>

      {/* Tailwind helper styles */}
      <style jsx>{`
        .nav-link {
          @apply text-white hover:text-white/80 transition-colors;
        }
        .dropdown-item {
          @apply flex items-center space-x-2 text-white hover:bg-white/10 rounded-md px-2 py-1 transition-colors;
        }
        .icon-btn {
          @apply text-white hover:bg-white/10 transition-colors rounded-full;
        }
      `}</style>
    </header>
  )
}
