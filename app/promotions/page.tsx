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
    <div className="min-h-screen bg-transparent">
      <Header />
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <div className="content-overlay p-8 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-pink-600" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent">
                Ưu đãi đặc biệt
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Khám phá {promotions.length} ưu đãi hấp dẫn từ các studio hàng đầu
            </p>
          </div>
        </div>

        {/* Hot Deals Banner */}
        <div className="mb-8">
          <Card className="glass-card bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-800">Ưu đãi HOT nhất tuần!</h3>
                  <p className="text-red-600">Số lượng có hạn, nhanh tay đặt lịch ngay!</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {promotions
                  .filter((p) => p.isHot)
                  .slice(0, 3)
                  .map((promo) => (
                    <div key={promo.id} className="bg-white/80 p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">{promo.title}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getDiscountBadge(promo)}
                          <span className="text-sm text-muted-foreground">{promo.studio}</span>
                        </div>
                        <Button size="sm" asChild>
                          <Link href={`/promotions/${promo.id}`}>Xem</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Bộ lọc ưu đãi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Tìm kiếm ưu đãi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  <SelectItem value="Chụp ảnh cưới">Chụp ảnh cưới</SelectItem>
                  <SelectItem value="Makeup">Makeup</SelectItem>
                  <SelectItem value="Quay phim">Quay phim</SelectItem>
                  <SelectItem value="Thiết kế">Thiết kế</SelectItem>
                  <SelectItem value="Combo">Combo</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Loại ưu đãi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại</SelectItem>
                  <SelectItem value="Giảm giá">Giảm giá</SelectItem>
                  <SelectItem value="Tặng kèm">Tặng kèm</SelectItem>
                  <SelectItem value="Flash Sale">Flash Sale</SelectItem>
                  <SelectItem value="Mua 1 tặng 1">Mua 1 tặng 1</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="ending">Sắp hết hạn</SelectItem>
                  <SelectItem value="discount">Giảm giá cao nhất</SelectItem>
                  <SelectItem value="popular">Phổ biến nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">Hiển thị {sortedPromotions.length} ưu đãi</p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPromotions.map((promo) => {
            const daysLeft = calculateDaysLeft(promo.validTo)
            const usagePercent = (promo.usedCount / promo.maxUsage) * 100

            return (
              <Card key={promo.id} className="glass-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {getDiscountBadge(promo)}
                    {promo.isHot && <Badge className="bg-orange-500 text-white">HOT</Badge>}
                    {promo.isExpiring && <Badge className="bg-red-600 text-white">Sắp hết hạn</Badge>}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {daysLeft > 0 ? `${daysLeft} ngày` : "Hết hạn"}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{promo.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{promo.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">Studio:</span>
                        <p className="font-medium">{promo.studio}</p>
                      </div>
                      <Badge variant="outline">{promo.category}</Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Giá gốc:</span>
                        <span className="text-sm line-through text-muted-foreground">{promo.originalPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Giá ưu đãi:</span>
                        <span className="text-lg font-bold text-primary">{promo.salePrice}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Đã sử dụng:</span>
                        <span>
                          {promo.usedCount}/{promo.maxUsage}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-teal-500 h-2 rounded-full"
                          style={{ width: `${usagePercent}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {promo.validFrom} - {promo.validTo}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" asChild>
                        <Link href={`/promotions/${promo.id}`}>Xem chi tiết</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/booking?promo=${promo.id}`}>Đặt ngay</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {sortedPromotions.length === 0 && (
          <div className="text-center py-12">
            <div className="content-overlay p-8 max-w-md mx-auto">
              <p className="text-muted-foreground text-lg mb-4">
                Không tìm thấy ưu đãi nào phù hợp với tiêu chí tìm kiếm.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedType("all")
                  setSortBy("newest")
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
