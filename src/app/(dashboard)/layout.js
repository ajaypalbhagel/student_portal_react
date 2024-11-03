import Link from "next/link";
import Image from "next/image";
import Menu from "../../components/menu";
import Navbar from "@/components/navbar";


export default function DashboardLayout({ children }) {
  return (

    <div className="min-h-screen flex flex-col">
    <div className="header "><Navbar /></div>
    
    <div className="flex flex-grow">
      <div className="w-[10%] md:w-[6%] lg:w-[15%] xl:w-[12%]  min-h-full p-2 ">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={42} />
        <span className="hidden lg:block"> Student Management</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[90%] md:w-[94%] lg:w-[85%] xl:w-[88%] bg-gray-100  min-h-full">{children}</div>
    </div>

  </div>
  
  );
}
