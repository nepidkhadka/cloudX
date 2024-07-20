import InstaIcon from "@/assets/icons/insta.svg"
import Twitter from "@/assets/icons/x-social.svg"
import TikTok from "@/assets/icons/tiktok.svg"
import Youtube from "@/assets/icons/youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <span className="text-center">2024 CloudX, Inc. All Right Reserved</span>
            <ul className="flex justify-center gap-2.5" >
              <li><InstaIcon/></li>
              <li><Twitter/></li>
              <li><TikTok/></li>
              <li><Youtube/></li>  
            </ul> 
          </div>
        </div>
      </div>
    </footer>
  );
};
