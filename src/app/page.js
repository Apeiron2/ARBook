import Image from "next/image";
import VerticalMenu from "../components/VerticalMenu";
import Header from "../partials/Header";
import TopicList from "@/components/TopicList";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex flex-col gap-4 p-3 bg-white h-100">
        <Carousel />
        <div className="bg-gray-200 p-3 rounded-lg">
          <TopicList />
        </div>
      </div>
    </div>
  );
}
