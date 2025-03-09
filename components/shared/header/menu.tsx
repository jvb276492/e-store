<<<<<<< HEAD
"use client";
import {
  AlignCenter,
  AlignJustify,
  AlignRight,
  EllipsisIcon,
  EllipsisVertical,
  HamIcon,
  MoreHorizontalIcon,
  RectangleEllipsisIcon,
  ShieldEllipsis,
  ShoppingCart,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
=======
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
>>>>>>> 5cd71b8477b7fbc6e4fe183f2dfc7b7b55f93bfb
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

<<<<<<< HEAD
export default function Menu() {
=======
export function Menu() {
>>>>>>> 5cd71b8477b7fbc6e4fe183f2dfc7b7b55f93bfb
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
<<<<<<< HEAD
            <AlignRight />
=======
            <EllipsisVertical />
>>>>>>> 5cd71b8477b7fbc6e4fe183f2dfc7b7b55f93bfb
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
