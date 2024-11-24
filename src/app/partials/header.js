import Image from "next/image";
import HustLogo from "../../assets/hust-logo.png";
import HeaderIcon from "../../assets/image.png";
const Header = () => {
  return (
    <header className="bg-red-600 flex justify-between items-center px-4 py-2 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src={HustLogo} height={41} alt="Hust Logo" />
      </div>

      {/* Title */}
      <div className="flex items-center space-x-2">
        <span className="text-white font-bold text-lg">TÀI LIỆU HỌC AR</span>
        <Image src={HeaderIcon} height={37} alt="Tài liệu học AR" />
      </div>
    </header>
  );
};

export default Header;
