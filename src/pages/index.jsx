import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-[18px] py-[10px] bg-black text-white rounded-[10px]"
      >
        Login
      </button>
    </div>
  );
}
