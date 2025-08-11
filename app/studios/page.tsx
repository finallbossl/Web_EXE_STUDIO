"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import ClientOnly from "@/components/ClientOnly"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Camera,
  Star,
  MapPin,
  Search,
  Filter,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const studios = [
  {
    id: "1",
    name: "Studio Biển Xanh",
    rating: 4.9,
    reviews: 127,
    location: "Quận 1, TP.HCM",
    price: "2,000,000",
    image: "/anh-duong-studio-918172.jpg",
    verified: true,
    specialties: ["Chụp ảnh cưới", "Chụp ảnh biển"],
  },
  {
    id: "2",
    name: "Studio Ánh Dương",
    rating: 4.8,
    reviews: 98,
    location: "Quận 3, TP.HCM",
    price: "1,800,000",
    image: "/duthuyen.jpg",
    verified: true,
    specialties: ["Chụp ảnh gia đình", "Chụp ảnh doanh nghiệp"],
  },
  {
    id: "3",
    name: "Studio Hoàng Gia",
    rating: 4.7,
    reviews: 156,
    location: "Quận 7, TP.HCM",
    price: "2,500,000",
    image: "/covua.jpg",
    verified: false,
    specialties: ["Chụp ảnh cưới cao cấp", "Chụp ảnh thời trang"],
  },
  {
    id: "4",
    name: "Studio Mộng Mơ",
    rating: 4.6,
    reviews: 89,
    location: "Xuân Diệu ,Quy Nhơn",
    price: "1,500,000",
    image: "/sinhnhat.jpg",
    verified: true,
    specialties: ["Chụp ảnh sinh nhật", "Chụp ảnh trẻ em"],
  },
  {
    id: "5",
    name: "Studio Thiên Nhiên",
    rating: 4.8,
    reviews: 134,
    location: "Ngô Mây,Quy Nhơn",
    price: "2,200,000",
    image: "/tao-dang-chup-anh-voi-hoa-co-phu-kien-9.webp",
    verified: true,
    specialties: ["Chụp ảnh ngoại cảnh", "Chụp ảnh với hoa"],
  },
  {
    id: "6",
    name: "Studio Chuyên Nghiệp",
    rating: 4.9,
    reviews: 201,
    location: "Nguyễn Thái Học,  Quy Nhơn",
    price: "3,000,000",
    image: "/bi-quyet-chup-anh-01-01-01-01-01-01-01-1280x720.jpg",
    verified: true,
    specialties: ["Chụp ảnh nghệ thuật", "Chụp ảnh concept"],
  },
]

export default function StudiosPage() {
  return (
    <ClientOnly fallback={
      <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#6F5D4F] mx-auto mb-4"></div>
          <p className="text-[#6F5D4F] text-lg">Đang tải danh sách studio...</p>
        </div>
      </div>
    }>
      <div className="min-h-screen bg-[#F5F1EB]">
        <Header />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[#EFE7DA] to-[#F5F1EB]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#6F5D4F] mb-4">
              Tìm Studio Chụp Ảnh Hoàn Hảo
            </h1>
            <p className="text-xl text-[#6F5D4F]/80 mb-8 max-w-2xl mx-auto">
              Khám phá những studio chụp ảnh chuyên nghiệp với đội ngũ nhiếp ảnh gia tài năng
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex-1">
                  <Input
                    placeholder="Tìm kiếm studio, địa điểm..."
                    className="border-0 focus-visible:ring-0 bg-transparent"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Chọn quận" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quan1">Quy Nhon</SelectItem>
                    
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Loại dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Chụp ảnh cưới</SelectItem>
                    <SelectItem value="family">Chụp ảnh gia đình</SelectItem>
                    <SelectItem value="birthday">Chụp ảnh sinh nhật</SelectItem>
                    <SelectItem value="business">Chụp ảnh doanh nghiệp</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#6F5D4F] text-white hover:bg-[#5d4c40]">
                  <Search className="w-4 h-4 mr-2" />
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#6F5D4F]" />
                <span className="font-medium text-[#6F5D4F]">Lọc theo:</span>
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Dưới 2 triệu</SelectItem>
                  <SelectItem value="medium">2-3 triệu</SelectItem>
                  <SelectItem value="high">Trên 3 triệu</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Đánh giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 sao</SelectItem>
                  <SelectItem value="4">4+ sao</SelectItem>
                  <SelectItem value="3">3+ sao</SelectItem>
                </SelectContent>
              </Select>
              <Badge variant="outline" className="cursor-pointer hover:bg-[#e4d8c5]">
                Đã xác minh
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-[#EFE7DA]">
                Gần tôi
              </Badge>
            </div>
          </div>
        </section>

        {/* Studios Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#6F5D4F]">
                Tìm thấy {studios.length} studio
              </h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                  <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                  <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studios.map((studio) => (
                <Card
                  key={studio.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white border border-[#D8CEC2] group"
                >
                  <div className="relative">
                    <Image
                      src={studio.image}
                      alt={studio.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    {studio.verified && (
                      <Badge className="absolute top-2 left-2 bg-[#357821] !text-white">
                        <Shield className="w-3 h-3 mr-1" />
                        Đã xác minh
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/80 hover:bg-white text-[#6F5D4F] p-2"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#6F5D4F]">
                      {studio.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-[#6F5D4F]">
                          {studio.rating}
                        </span>
                      </div>
                      <span className="text-sm text-[#6F5D4F]/60">
                        ({studio.reviews} đánh giá)
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-[#6F5D4F]/70 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {studio.location}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {studio.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs bg-[#EFE7DA] text-[#6F5D4F] border-[#C1B6A3]"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-[#5f5148]">
                        Từ {studio.price}đ
                      </div>
                      <Button
                        size="sm"
                        className="bg-[#6F5D4F] !text-white hover:bg-[#5d4c40]"
                        asChild
                      >
                        <Link href={`/studios/${studio.id}`}>Xem chi tiết</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Trước
                </Button>
                <Button className="bg-[#6F5D4F] text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Sau</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ClientOnly>
  )
}