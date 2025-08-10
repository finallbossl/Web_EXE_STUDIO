import { use } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Clock, Gift, Calendar, ArrowLeft, Share2, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PromotionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  // Mock data - in real app, fetch based on id
  const promotion = {
    id: 1,
    title: "Giảm 50% gói chụp ảnh cưới mùa cưới 2024",
    description: "Ưu đãi đặc biệt cho các cặp đôi đặt lịch chụp ảnh cưới trong tháng 12",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    category: "Chụp ảnh cưới",
    type: "Giảm giá",
    discount: 50,
    originalPrice: "10,000,000 VNĐ",
    salePrice: "5,000,000 VNĐ",
    validFrom: "01/12/2024",
    validTo: "31/12/2024",
    studio: {
      id: 1,
      name: "Golden Moment Studio",
      rating: 4.9,
      reviews: 156,
      location: "Quận 1, TP.HCM",
      phone: "0123 456 789",
      image: "/placeholder.svg?height=100&width=100",
    },
    isHot: true,
    isExpiring: false,
    terms: [
      "Áp dụng cho gói chụp ảnh cưới cơ bản và cao cấp",
      "Đặt lịch trước 15/12/2024",
      "Thanh toán cọc 30% để giữ ưu đãi",
      "Không áp dụng cùng các chương trình khác",
      "Có thể thay đổi lịch hẹn 1 lần miễn phí",
      "Bao gồm 200-300 ảnh đã chỉnh sửa",
      "Album ảnh 30x40cm (50 trang)",
      "USB chứa toàn bộ ảnh gốc",
    ],
    usedCount: 45,
    maxUsage: 100,
    content: `
      <h3>Ưu đãi đặc biệt mùa cưới 2024</h3>
      <p>Chào mừng mùa cưới 2024! Golden Moment Studio tự hào mang đến cho các cặp đôi ưu đãi đặc biệt với mức giảm giá lên đến 50% cho tất cả các gói chụp ảnh cưới.</p>
      
      <h4>Điều gì làm nên sự đặc biệt?</h4>
      <ul>
        <li>Đội ngũ nhiếp ảnh gia chuyên nghiệp với hơn 10 năm kinh nghiệm</li>
        <li>Trang thiết bị máy ảnh hiện đại nhất</li>
        <li>Phong cách chụp ảnh đa dạng: tự nhiên, cổ điển, hiện đại</li>
        <li>Dịch vụ chỉnh sửa ảnh chuyên nghiệp</li>
      </ul>
      
      <h4>Gói dịch vụ bao gồm:</h4>
      <p>Với mức giá ưu đãi chỉ 5,000,000 VNĐ (giảm từ 10,000,000 VNĐ), bạn sẽ nhận được:</p>
      <ul>
        <li>6-8 giờ chụp ảnh liên tục</li>
        <li>200-300 ảnh đã được chỉnh sửa chuyên nghiệp</li>
        <li>Album ảnh cao cấp 30x40cm với 50 trang</li>
        <li>USB chứa toàn bộ ảnh gốc</li>
        <li>1 nhiếp ảnh gia chính + 1 trợ lý</li>
      </ul>
      
      <h4>Lưu ý quan trọng:</h4>
      <p>Ưu đãi này chỉ có hiệu lực trong tháng 12/2024. Để đảm bảo được slot chụp ảnh trong thời gian bạn mong muốn, vui lòng đặt lịch sớm và thanh toán cọc 30%.</p>
    `,
    relatedPromotions: [
      {
        id: 2,
        title: "Makeup cô dâu miễn phí khi thuê váy cưới",
        image: "/placeholder.svg?height=150&width=200",
        discount: 0,
        type: "Tặng kèm",
        studio: "Royal Wedding Dress",
      },
      {
        id: 3,
        title: "Giảm 30% dịch vụ quay phim sự kiện",
        image: "/placeholder.svg?height=150&width=200",
        discount: 30,
        type: "Giảm giá",
        studio: "Creative Vision",
      },
    ],
  }

  const calculateDaysLeft = (validTo: string) => {
    const today = new Date()
    const endDate = new Date(validTo.split("/").reverse().join("-"))
    const diffTime = endDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysLeft = calculateDaysLeft(promotion.validTo)
  const usagePercent = (promotion.usedCount / promotion.maxUsage) * 100

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/promotions">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại danh sách ưu đãi
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Image */}
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={promotion.image || "/placeholder.svg"}
                  alt={promotion.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-red-500 text-white">-{promotion.discount}%</Badge>
                  {promotion.isHot && <Badge className="bg-orange-500 text-white">HOT</Badge>}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    <Clock className="w-3 h-3 mr-1" />
                    {daysLeft > 0 ? `${daysLeft} ngày` : "Hết hạn"}
                  </Badge>
                </div>
              </div>

              {/* Title and Description */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{promotion.title}</h1>
                    <p className="text-xl text-muted-foreground">{promotion.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Chia sẻ
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">{promotion.category}</Badge>
                  <Badge variant="secondary">{promotion.type}</Badge>
                </div>
              </div>

              {/* Content */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Chi tiết ưu đãi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: promotion.content }} />
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Điều kiện áp dụng</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {promotion.terms.map((term, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{term}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Gallery */}
              {promotion.gallery.length > 0 && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Hình ảnh minh họa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {promotion.gallery.map((image, index) => (
                        <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Gallery ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-pink-600" />
                    Thông tin ưu đãi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">-{promotion.discount}%</div>
                    <div className="text-sm text-muted-foreground">Giảm giá</div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Giá gốc:</span>
                      <span className="line-through text-muted-foreground">{promotion.originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Giá ưu đãi:</span>
                      <span className="text-xl font-bold text-primary">{promotion.salePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tiết kiệm:</span>
                      <span className="font-medium text-green-600">
                        {(
                          Number.parseInt(promotion.originalPrice.replace(/[^\d]/g, "")) -
                          Number.parseInt(promotion.salePrice.replace(/[^\d]/g, ""))
                        ).toLocaleString()}{" "}
                        VNĐ
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Đã sử dụng:</span>
                      <span>
                        {promotion.usedCount}/{promotion.maxUsage}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-teal-500 h-2 rounded-full"
                        style={{ width: `${usagePercent}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground text-center">
                      Còn lại {promotion.maxUsage - promotion.usedCount} suất
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Có hiệu lực từ {promotion.validFrom}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Hết hạn vào {promotion.validTo}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/booking?promo=${promotion.id}`}>Đặt lịch ngay</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Studio Info */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Thông tin Studio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src={promotion.studio.image || "/placeholder.svg"}
                        alt={promotion.studio.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{promotion.studio.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          ⭐ {promotion.studio.rating} ({promotion.studio.reviews} đánh giá)
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{promotion.studio.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/studios/${promotion.studio.id}`}>Xem Studio</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`tel:${promotion.studio.phone}`}>Gọi ngay</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Promotions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Ưu đãi liên quan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {promotion.relatedPromotions.map((related) => (
                      <div key={related.id} className="flex gap-3 p-3 border rounded-lg hover:bg-muted/50">
                        <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={related.image || "/placeholder.svg"}
                            alt={related.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">{related.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{related.studio}</p>
                          <div className="flex items-center gap-2">
                            {related.discount > 0 ? (
                              <Badge className="bg-red-500 text-white text-xs">-{related.discount}%</Badge>
                            ) : (
                              <Badge className="bg-green-500 text-white text-xs">{related.type}</Badge>
                            )}
                            <Button size="sm" variant="outline" className="text-xs h-6" asChild>
                              <Link href={`/promotions/${related.id}`}>Xem</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
