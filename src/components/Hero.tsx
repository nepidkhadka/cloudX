import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow-w.svg"
import CursorImage from "@/assets/images/cursor.png"
import Message from "@/assets/images/message.png"
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative overflow-clip bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d24_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] sm:py-24">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px]">
      </div>
      <div className="container relative">
        <div className="text-center">
          <Link className="border py-1 px-2 rounded-lg border-white/30" href={"#"}>
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text] mr-2" >Version 2.0 Is Here</span>
            <span className="inline-flex items-center gap-1" >
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex items-center flex-col flex-nowrap text-center relative">
          <Image className="absolute right-0 top-[56px] hidden sm:inline" height={150} width={150} src={CursorImage} alt="Cursor Image" />
          <Image className="absolute top-[108px] left-0 hidden sm:inline" height={150} width={150} src={Message} alt="Message Image" />
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter mt-8">One task <br /> at a Time</h1>
          <p className="text-xl mt-8 max-w-md">With a user-friendly interface and advanced search capabilities, CloudX connects job seekers with employers efficiently, making the job search process smooth and successful. Start your career journey with ClouudX today!</p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get for free</button>
        </div>
      </div>
    </div>
  );
};
