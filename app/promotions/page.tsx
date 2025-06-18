"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gift, Calendar, MapPin, Search, Filter, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function PromotionsPage() {
  const promotions = [
    {
      id: "1",
      title: "Giảm 30% cho khách hàng mới",
      description: "Áp dụng cho tất cả dịch vụ chụp ảnh cưới tại các studio đối tác",
      discount: "30%",
      validUntil: "31/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "studio",
      provider: "Tất cả studio",
      minOrder: 2000000,
      maxDiscount: 1000000,
      code: "NEW30",
      used: 245,
      total: 1000,
    },
    {
      id: "2",
      title: "Combo makeup + thuê đồ",
      description: "Tiết kiệm đến 25% khi đặt combo makeup và thuê trang phục cùng lúc",
      discount: "25%",
      validUntil: "15/04/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "combo",
      provider: "Đối tác liên kết",
      minOrder: 1500000,
      maxDiscount: 500000,
      code: "COMBO25",
      used: 89,
      total: 500,
    },
    {
      id: "3",
      title: "Flash Sale cuối tuần",
      description: "Giảm giá sốc cho các dịch vụ makeup trong 2 ngày cuối tuần",
      discount: "40%",
      validUntil: "17/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "makeup",
      provider: "Makeup Artist Pro",
      minOrder: 800000,
      maxDiscount: 300000,
      code: "FLASH40",
      used: 156,
      total: 200,
      isFlash: true,
    },
    {
      id: "4",
      title: "Ưu đãi thuê áo cưới",
      description: "Miễn phí phụ kiện khi thuê áo cưới từ 3 ngày trở lên",
      discount: "Free",
      validUntil: "30/04/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "rental",
      provider: "Áo Cưới Hoàng Gia",
      minOrder: 2000000,
      maxDiscount: 0,
      code: "FREEGIFT",
      used: 67,
      total: 300,
    },
    {
      id: "5",
      title: "Gói chụp ảnh gia đình",
      description: "Giảm 20% cho gói chụp ảnh gia đình từ 4 người trở lên",
      discount: "20%",
      validUntil: "25/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "studio",
      provider: "Studio Gia Đình",
      minOrder: 1200000,
      maxDiscount: 400000,
      code: "FAMILY20",
      used: 123,
      total: 400,
    },
    {
      id: "6",
      title: "Makeup dự tiệc đặc biệt",
      description: "Tặng kèm làm nail miễn phí cho dịch vụ makeup dự tiệc",
      discount: "Free Nail",
      validUntil: "20/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "makeup",
      provider: "Beauty Salon Elite",
      minOrder: 1000000,
      maxDiscount: 200000,
      code: "PARTY",
      used: 78,
      total: 150,
    },
  ]

  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "studio", label: "Studio chụp ảnh" },
    { value: "makeup", label: "Makeup" },
    { value: "rental", label: "Thuê trang phục" },
    { value: "combo", label: "Combo" },
  ]

  const sortOptions = [
    { value: "newest", label: "Mới nhất" },
    { value: "ending", label: "Sắp hết hạn" },
    { value: "discount", label: "Giảm giá cao nhất" },
    { value: "popular", label: "Phổ biến nhất" },
  ]

  const getDiscountColor = (discount: string) => {
    if (discount.includes("40")) return "bg-red-500"
    if (discount.includes("30")) return "bg-orange-500"
    if (discount.includes("25")) return "bg-yellow-500"
    if (discount.includes("20")) return "bg-green-500"
    return "bg-blue-500"
  }

  const getDaysLeft = (validUntil: string) => {
    const today = new Date()
    const endDate = new Date(validUntil.split("/").reverse().join("-"))
    const diffTime = endDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Ưu đãi & Khuyến mãi</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Khám phá những ưu đãi hấp dẫn từ các nhà cung cấp dịch vụ hàng đầu
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-card border-white/20 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/50" />
              <Input
                placeholder="Tìm kiếm ưu đãi..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 hover:opacity-90">
              <Filter className="w-4 h-4 mr-2" />
              Lọc
            </Button>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 glass-card border-white/20 group"
            >
              <div className="relative">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge className={`${getDiscountColor(promo.discount)} text-white`}>
                    <Gift className="w-3 h-3 mr-1" />
                    {promo.discount}
                  </Badge>
                  {promo.isFlash && (
                    <Badge className="bg-red-600 text-white animate-pulse">
                      <Clock className="w-3 h-3 mr-1" />
                      Flash Sale
                    </Badge>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {promo.category === "studio"
                      ? "Studio"
                      : promo.category === "makeup"
                        ? "Makeup"
                        : promo.category === "rental"
                          ? "Thuê đồ"
                          : "Combo"}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge className="bg-black/50 text-white">
                    <Calendar className="w-3 h-3 mr-1" />
                    {getDaysLeft(promo.validUntil)} ngày
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{promo.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{promo.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span className="text-white">{promo.provider}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Star className="w-4 h-4" />
                    <span className="text-white">Đơn tối thiểu: {promo.minOrder.toLocaleString()}đ</span>
                  </div>
                </div>

                {/* Usage Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-white/70 mb-1">
                    <span className="text-white">Đã sử dụng</span>
                    <span className="text-white">
                      {promo.used}/{promo.total}
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-rose-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(promo.used / promo.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-xs text-white/70">Mã giảm giá</div>
                    <div className="font-mono font-bold text-white bg-white/10 px-2 py-1 rounded text-sm">
                      {promo.code}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 hover:opacity-90"
                  >
                    Sử dụng ngay
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Xem thêm ưu đãi
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 glass-card border-white/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Đăng ký nhận ưu đãi</h3>
          <p className="text-white/70 mb-6">Nhận thông báo về các ưu đãi mới nhất qua email</p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              placeholder="Nhập email của bạn"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 hover:opacity-90">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
