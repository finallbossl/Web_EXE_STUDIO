"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Settings,
  Calendar,
  Heart,
  Star,
  CreditCard,
  Bell,
  LogOut,
  Shield,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function UserMenu() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="text-[#6F5D4F] hover:bg-[#EFE7DA]" asChild>
          <Link href="/login">Đăng nhập</Link>
        </Button>
        <Button className="bg-[#C1B6A3] text-white hover:bg-[#B3907A]" asChild>
          <Link href="/register">Đăng ký</Link>
        </Button>
      </div>
    )
  }

  const getMembershipColor = (level: string) => {
    return "bg-[#B3907A] text-white"
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-2 text-[#6F5D4F] hover:bg-[#EFE7DA]">
          <Avatar className="w-8 h-8 border border-[#C1B6A3]">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="bg-[#EFE7DA] text-[#6F5D4F]">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium">{user.name}</div>
            <Badge className={cn("text-xs", getMembershipColor(user.membershipLevel))}>
              {user.membershipLevel}
            </Badge>
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 bg-[#E1DACA] border border-[#C1B6A3] text-[#6F5D4F]" align="end">
        <DropdownMenuLabel>
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border border-[#C1B6A3]">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="bg-[#EFE7DA] text-[#6F5D4F]">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-[#6F5D4F]/70">{user.email}</div>
              <Badge className={cn("text-xs mt-1", getMembershipColor(user.membershipLevel))}>
                {user.membershipLevel} Member
              </Badge>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-[#C1B6A3]" />

        {[
          { href: "/profile", icon: User, label: "Hồ sơ cá nhân" },
          { href: "/dashboard", icon: Calendar, label: "Dashboard" },
          { href: "/bookings", icon: Calendar, label: "Lịch đặt của tôi" },
          { href: "/favorites", icon: Heart, label: "Yêu thích" },
          { href: "/reviews", icon: Star, label: "Đánh giá của tôi" },
          { href: "/payments", icon: CreditCard, label: "Thanh toán" },
          { href: "/notifications", icon: Bell, label: "Thông báo" },
          { href: "/settings", icon: Settings, label: "Cài đặt" },
        ].map(({ href, icon: Icon, label }) => (
          <DropdownMenuItem asChild key={href}>
            <Link href={href} className="flex items-center gap-2 cursor-pointer hover:bg-[#EFE7DA]">
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          </DropdownMenuItem>
        ))}

        {user.role === "admin" && (
          <>
            <DropdownMenuSeparator className="bg-[#C1B6A3]" />
            <DropdownMenuItem asChild>
              <Link href="/admin" className="flex items-center gap-2 cursor-pointer hover:bg-[#EFE7DA]">
                <Shield className="w-4 h-4" />
                <span>Quản trị</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator className="bg-[#C1B6A3]" />

        <DropdownMenuItem
          onClick={logout}
          className="flex items-center gap-2 cursor-pointer text-red-600 hover:bg-red-50 focus:text-red-700"
        >
          <LogOut className="w-4 h-4" />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
