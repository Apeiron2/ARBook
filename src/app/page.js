import Image from "next/image";
import VerticalMenu from "../components/VerticalMenu";
import Header from "../partials/header";
import TopicList from "@/components/TopicList";

export default function Home() {
  return (
    <div>
      <Header />
      <VerticalMenu />
    </div>
  );
}
