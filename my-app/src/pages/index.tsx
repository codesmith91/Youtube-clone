import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "@/componant/VideoCard"
import {VideoGrid} from "@/componant/VideoGrid"
import { AppBar } from "@/componant/AppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid></VideoGrid>
    </div>
  );
}
