import Link from "next/link";
const VerticalMenu = () => {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-red-600 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <Link
        href="#home"
        className="flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg text-white hover:bg-white hover:text-red-600"
      >
        <i className="fa-solid fa-house text-2xl"></i>
        <span className="text-sm mt-1">Trang chủ</span>
      </Link>
      <Link
        href="/home"
        className="flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg text-white hover:bg-white hover:text-red-600"
      >
        <i className="fas fa-file-alt text-2xl"></i>
        <span className="text-sm mt-1">Nội dung</span>
      </Link>
      <Link
        href="/test"
        className="flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg text-white hover:bg-white hover:text-red-600"
      >
        <i className="fas fa-robot text-2xl"></i>
        <span className="text-sm mt-1">Mô hình</span>
      </Link>
      <Link
        href="#worksheet"
        className="flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg text-white hover:bg-white hover:text-red-600"
      >
        <i className="fas fa-edit text-2xl"></i>
        <span className="text-sm mt-1">Phiếu bài tập</span>
      </Link>
      <Link
        href="#ar"
        className="flex flex-col items-center justify-center py-4 px-1 m-1 rounded-lg hover:shadow-lg text-white hover:bg-white hover:text-red-600"
      >
        <i className="fas fa-crosshairs text-2xl"></i>
        <span className="text-sm mt-1">AR</span>
      </Link>
    </div>
  );
};

export default VerticalMenu;
