import Image from "next/image";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 w-full">
        <div style={{ background: '#4CA809' }}>
          <Navbar />
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
