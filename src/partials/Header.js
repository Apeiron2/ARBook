import Image from "next/image";
import HustLogo from "../assets/hust-logo.png";
import HeaderIcon from "../assets/image.png";
const Header = () => {
  return (
    <header className="bg-red-600 flex justify-between items-center shadow-md px-3">
      <div className="flex items-center p-3">
        <Image src={HustLogo} height={45} alt="Hust Logo" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-white roboto-bold text-lg  hidden md:block">
          TÀI LIỆU HỌC AR
        </span>
        <Image src={HeaderIcon} height={32} alt="Tài liệu học AR" />
      </div>
    </header>
  );
};

export default Header;
