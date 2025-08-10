"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Camera, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 bg-[#C1B6A3] rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-[#6F5D4F] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#6F5D4F] mb-4">
            Trang không tồn tại
          </h2>
          <p className="text-[#6F5D4F]/70 mb-8">
            Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. 
            Có thể trang đã được di chuyển hoặc không còn tồn tại.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-[#6F5D4F] text-white hover:bg-[#5d4c40]">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Về trang chủ
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full border-[#C1B6A3] text-[#6F5D4F] hover:bg-[#EDE6DD]">
            <Link href="/studios">
              <Camera className="w-4 h-4 mr-2" />
              Xem danh sách studio
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()} 
            className="w-full text-[#6F5D4F] hover:bg-[#EDE6DD]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang trước
          </Button>
        </div>
      </div>
    </div>
  )
}