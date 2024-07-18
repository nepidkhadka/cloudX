import Link from "next/link";

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#F6D6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]">
      <div className="container">
        <p className="font-medium ">
          <span className="hidden md:inline" >
            Introducing a completely redesign interface -
          </span>
          <Link className="underline underline-offset-4" href={"#"}> Explore the Demo</Link>
        </p>
      </div>
    </div>
  );
};
