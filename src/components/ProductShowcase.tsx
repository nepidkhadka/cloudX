import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container">
          <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter" >Intuitive Interface</h2>
          <p className="text-xl text-center text-white/70 mt-5 max-w-xl mx-auto">Celebrate the joy of accomplishment with an app designed to track your progress.</p>
          <Image className="mt-14" src={appScreen} alt="Product" />
      </div>
    </div>
  );
};
