import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
<<<<<<< HEAD
import Menu from "./menu";
=======
import { Menu } from "./menu";
>>>>>>> 5cd71b8477b7fbc6e4fe183f2dfc7b7b55f93bfb

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center p-4">
        <div className="flex itmes-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              className="w-auto h-auto"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
