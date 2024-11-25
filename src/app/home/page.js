import TopicList from "@/components/TopicList";
import ImageModuleCothenguoi from "@/assets/images/module-cothenguoi.png";
import ImageModuleHeMatTroi from "@/assets/images/module-hemattroi.png";
const topics = [
  {
    title: "Hệ Mặt Trời",
    description:
      "Với tính năng Thực Tế Tăng Cường (AR) tích hợp, bạn có thể tương tác với mô hình 3D của các hành tinh ngay trên bàn học.",
    image: ImageModuleHeMatTroi, // Thay bằng URL hình ảnh thực tế
  },
  {
    title: "Cơ Thể Con Người",
    description:
      "Quan sát mô hình 3D của cơ thể người một cách chi tiết, từ hệ cơ xương đến mạch máu và nội tạng.",
    image: ImageModuleCothenguoi, // Thay bằng URL hình ảnh thực tế
  },
];

export default function HomePage() {
  return (
    <div>
      <TopicList topics={topics} />
    </div>
  );
}
