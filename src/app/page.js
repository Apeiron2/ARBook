import TopicList from "@/components/TopicList";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-3 bg-white h-100">
      <Carousel />
      <div className="bg-gray-200 p-3 rounded-lg">
        <TopicList />
      </div>
    </div>
  );
}
