import HelexImage from "@/assets/images/helix2.png"
import EmojiStar from "@/assets/images/emojistar.png"
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image className="hidden md:inline absolute top-16 left-[calc(100%-36px)]" height={120} src={HelexImage} alt="Helex Image"/>
        <Image className="hidden md:inline absolute right-[calc(100%-24px)] -top-[120px]" height={120} src={EmojiStar} alt="Emoji Star"/>
        <h2 className="text-5xl sm:text-6xl mx-auto font-bold tracking-tighter" >Get Instant Access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row" action="">
          <input type="email" className="h-12 bg-white/20 rounded-lg px-5 flex-grow placeholder:text-[#9CA3AF] focus:outline-none" placeholder="johndoe@gmail.com" />
          <button className="bg-white text-black h-12 rounded-lg px-5" >Get Access</button>
        </form>
      </div>
    </div>
  );
};
