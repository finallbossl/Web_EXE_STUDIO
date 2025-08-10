"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Filter, Search, Gift, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function PromotionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Define categories for filtering
  const categories = [
    { value: "all", label: "Tất cả danh mục" },
    { value: "Chụp ảnh cưới", label: "Chụp ảnh cưới" },
    { value: "Combo", label: "Combo" },
    { value: "Quay phim", label: "Quay phim" },
    { value: "Chụp ảnh gia đình", label: "Chụp ảnh gia đình" },
    { value: "Makeup", label: "Makeup" },
    { value: "Thiết kế", label: "Thiết kế" },
  ]

  // Define sort options
  const sortOptions = [
    { value: "newest", label: "Mới nhất" },
    { value: "ending", label: "Sắp hết hạn" },
    { value: "discount", label: "Giảm giá cao nhất" },
    { value: "popular", label: "Phổ biến nhất" },
  ]

  // Function to get discount color
  const getDiscountColor = (discount: number) => {
    if (discount >= 50) return "bg-red-600"
    if (discount >= 30) return "bg-orange-500"
    return "bg-yellow-500"
  }

  // Function to calculate days left
  const getDaysLeft = (validTo: string) => {
    const today = new Date()
    const endDate = new Date(validTo.split("/").reverse().join("-"))
    const diffTime = endDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  const promotions = [
    {
      id: 1,
      title: "Giảm 50% gói chụp ảnh cưới mùa cưới 2024",
      description: "Ưu đãi đặc biệt cho các cặp đôi đặt lịch chụp ảnh cưới trong tháng 12",
      image: "/placeholder.svg?height=200&width=300",
      category: "Chụp ảnh cưới",
      type: "Giảm giá",
      discount: 50,
      originalPrice: "10,000,000 VNĐ",
      salePrice: "5,000,000 VNĐ",
      validFrom: "01/12/2024",
      validTo: "31/12/2024",
      studio: "Golden Moment Studio",
      studioId: 1,
      isHot: true,
      isExpiring: false,
      terms: [
        "Áp dụng cho gói chụp ảnh cưới cơ bản và cao cấp",
        "Đặt lịch trước 15/12/2024",
        "Thanh toán cọc 30% để giữ ưu đãi",
        "Không áp dụng cùng các chương trình khác",
      ],
      usedCount: 45,
      maxUsage: 100,
    },
    {
      id: 2,
      title: "Makeup cô dâu miễn phí khi thuê váy cưới",
      description: "Combo hoàn hảo: Thuê váy cưới cao cấp + Makeup cô dâu chuyên nghiệp",
      image: "/placeholder.svg?height=200&width=300",
      category: "Combo",
      type: "Tặng kèm",
      discount: 0,
      originalPrice: "3,000,000 VNĐ",
      salePrice: "2,000,000 VNĐ",
      validFrom: "15/11/2024",
      validTo: "15/01/2025",
      studio: "Royal Wedding Dress",
      studioId: 2,
      isHot: false,
      isExpiring: true,
      terms: [
        "Áp dụng cho váy cưới từ 2 triệu trở lên",
        "Makeup artist có kinh nghiệm 5+ năm",
        "Bao gồm thử makeup 1 lần",
        "Đặt lịch trước 7 ngày",
      ],
      usedCount: 23,
      maxUsage: 50,
    },
    {
      id: 3,
      title: "Giảm 30% dịch vụ quay phim sự kiện",
      description: "Ưu đãi đặc biệt cho các sự kiện cuối năm: sinh nhật, kỷ niệm, tiệc công ty",
      image: "/placeholder.svg?height=200&width=300",
      category: "Quay phim",
      type: "Giảm giá",
      discount: 30,
      originalPrice: "8,000,000 VNĐ",
      salePrice: "5,600,000 VNĐ",
      validFrom: "01/11/2024",
      validTo: "31/01/2025",
      studio: "Creative Vision",
      studioId: 3,
      isHot: true,
      isExpiring: false,
      terms: [
        "Áp dụng cho sự kiện từ 4 giờ trở lên",
        "Bao gồm 1 videographer + 1 assistant",
        "Giao video trong 7 ngày",
        "Miễn phí 1 lần chỉnh sửa",
      ],
      usedCount: 12,
      maxUsage: 30,
    },
    {
      id: 4,
      title: "Mua 1 tặng 1 - Chụp ảnh gia đình",
      description: "Chụp 1 bộ ảnh gia đình, tặng thêm 1 bộ ảnh cá nhân cho bé",
      image: "/placeholder.svg?height=200&width=300",
      category: "Chụp ảnh gia đình",
      type: "Mua 1 tặng 1",
      discount: 0,
      originalPrice: "3,000,000 VNĐ",
      salePrice: "2,000,000 VNĐ",
      validFrom: "01/12/2024",
      validTo: "28/02/2025",
      studio: "Family Portrait Studio",
      studioId: 4,
      isHot: false,
      isExpiring: false,
      terms: [
        "Áp dụng cho gia đình có trẻ em dưới 12 tuổi",
        "Chụp tại studio hoặc ngoại cảnh",
        "Mỗi bộ 30-50 ảnh đã chỉnh sửa",
        "Tặng kèm album ảnh mini",
      ],
      usedCount: 8,
      maxUsage: 25,
    },
    {
      id: 5,
      title: "Flash Sale: Giảm 70% makeup dự tiệc",
      description: "Ưu đãi có thời hạn - chỉ 3 ngày! Makeup dự tiệc chuyên nghiệp",
      image: "/placeholder.svg?height=200&width=300",
      category: "Makeup",
      type: "Flash Sale",
      discount: 70,
      originalPrice: "1,000,000 VNĐ",
      salePrice: "300,000 VNĐ",
      validFrom: "10/12/2024",
      validTo: "12/12/2024",
      studio: "Beauty Queen Makeup",
      studioId: 5,
      isHot: true,
      isExpiring: true,
      terms: [
        "Chỉ áp dụng trong 3 ngày",
        "Đặt lịch và thanh toán ngay",
        "Không hoàn tiền khi hủy",
        "Tối đa 2 lượt/khách hàng",
      ],
      usedCount: 67,
      maxUsage: 100,
    },
    {
      id: 6,
      title: "Thiết kế logo + branding chỉ 1.5 triệu",
      description: "Gói thiết kế hoàn chỉnh cho doanh nghiệp mới thành lập",
      image: "/placeholder.svg?height=200&width=300",
      category: "Thiết kế",
      type: "Gói ưu đãi",
      discount: 40,
      originalPrice: "2,500,000 VNĐ",
      salePrice: "1,500,000 VNĐ",
      validFrom: "01/11/2024",
      validTo: "31/03/2025",
      studio: "Art & Design Hub",
      studioId: 6,
      isHot: false,
      isExpiring: false,
      terms: [
        "Bao gồm logo + 5 ứng dụng branding",
        "3 lần chỉnh sửa miễn phí",
        "Giao file trong 10 ngày làm việc",
        "Bảo hành thiết kế 6 tháng",
      ],
      usedCount: 15,
      maxUsage: 40,
    },
  ]

  const filteredPromotions = promotions.filter((promo) => {
    const matchesSearch =
      promo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.studio.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || promo.category === selectedCategory
    const matchesType = selectedType === "all" || promo.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const sortedPromotions = [...filteredPromotions].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.validFrom).getTime() - new Date(a.validFrom).getTime()
      case "ending":
        return new Date(a.validTo).getTime() - new Date(b.validTo).getTime()
      case "discount":
        return b.discount - a.discount
      case "popular":
        return b.usedCount - a.usedCount
      default:
        return 0
    }
  })

  const getDiscountBadge = (promo: any) => {
    if (promo.discount > 0) {
      return <Badge className="bg-red-500 text-white">-{promo.discount}%</Badge>
    }
    return <Badge className="bg-green-500 text-white">{promo.type}</Badge>
  }

  const calculateDaysLeft = (validTo: string) => {
    const today = new Date()
    const endDate = new Date(validTo.split("/").reverse().join("-"))
    const diffTime = endDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-[#EFE7DA] text-[#6F5D4F]">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#6F5D4F] mb-4">Ưu đãi & Khuyến mãi</h1>
          <p className="text-[#6F5D4F]/70 max-w-2xl mx-auto">
            Khám phá những ưu đãi hấp dẫn từ các nhà cung cấp dịch vụ hàng đầu
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-[#F5F1EB] border border-[#C1B6A3] rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#6F5D4F]/50" />
              <Input
                placeholder="Tìm kiếm ưu đãi..."
                className="pl-10 bg-[#EFE7DA] border border-[#C1B6A3] text-[#6F5D4F] placeholder:text-[#6F5D4F]/50"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="bg-[#EFE7DA] border border-[#C1B6A3] text-[#6F5D4F]">
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
              <SelectTrigger className="bg-[#EFE7DA] border border-[#C1B6A3] text-[#6F5D4F]">
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
            <Button className="bg-[#6F5D4F] text-white hover:opacity-90">
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
              className="overflow-hidden border border-[#C1B6A3] bg-white transition-all duration-300 rounded-xl hover:shadow-xl hover:-translate-y-1"
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
                    {promo.discount > 0 ? `-${promo.discount}%` : promo.type}
                  </Badge>
                  {promo.type === "Flash Sale" && (
                    <Badge className="bg-red-600 text-white animate-pulse">
                      <Clock className="w-3 h-3 mr-1" />
                      Flash Sale
                    </Badge>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {promo.category}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge className="bg-[#6F5D4F]/30 text-white">
                    <Calendar className="w-3 h-3 mr-1" />
                    {getDaysLeft(promo.validTo)} ngày
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 bg-white text-[#6F5D4F]">
                <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                <p className="text-[#6F5D4F]/70 text-sm mb-4 line-clamp-2">{promo.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-[#6F5D4F]/70">
                    <span className="text-[#6F5D4F] font-medium">{promo.studio}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6F5D4F]/70">
                    <span className="text-[#6F5D4F]">Hiệu lực: {promo.validFrom} - {promo.validTo}</span>
                  </div>
                </div>

                {/* Usage Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-[#6F5D4F]/70 mb-1">
                    <span>Đã sử dụng</span>
                    <span>
                      {promo.usedCount}/{promo.maxUsage}
                    </span>
                  </div>
                  <div className="w-full bg-[#EFE7DA] rounded-full h-2">
                    <div
                      className="bg-[#B3907A] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(promo.usedCount / promo.maxUsage) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-[#6F5D4F]">
                      {promo.salePrice}đ
                      {promo.originalPrice && (
                        <span className="text-sm line-through text-[#6F5D4F]/50 ml-2">
                          {promo.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button asChild size="sm" className="bg-[#6F5D4F] text-white hover:bg-[#5c4b3f]">
                    <Link href={`/promotions/${promo.id}`}>Xem chi tiết</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white text-[#6F5D4F] border-[#C1B6A3] hover:bg-[#F5F0E7]">
            Xem thêm ưu đãi
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 border border-[#C1B6A3] rounded-lg p-8 text-center bg-white">
          <h3 className="text-2xl font-bold mb-4 text-[#6F5D4F]">Đăng ký nhận ưu đãi</h3>
          <p className="text-[#6F5D4F]/70 mb-6">Nhận thông báo về các ưu đãi mới nhất qua email</p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              placeholder="Nhập email của bạn"
              className="bg-[#EFE7DA] border border-[#C1B6A3] text-[#6F5D4F] placeholder:text-[#6F5D4F]/50"
            />
            <Button className="bg-[#B3907A] text-white hover:bg-[#6F5D4F]">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
