import Image from "next/image";
import VerticalMenu from "./components/verticalMenu";
import Header from "./partials/header";

export default function Home() {
  return (
    <div>
      <Header />
      <VerticalMenu />
    </div>
  );
}
