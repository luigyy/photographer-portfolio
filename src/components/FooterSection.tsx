interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = ({}) => {
  return (
    <div className="min-h-80 overflow-hidden bg-[#2d2a24]">
      <h1 className="pt-14 text-center text-3xl text-[#e4b350]">
        — Feel free to reach out
      </h1>
      <h1 className="pt-2 text-center text-5xl text-zinc-200">
        hello@johndoe.com
      </h1>
      <div className="flex justify-between pb-28 ">
        <img
          src="footer1.jpg"
          className="ml-44 w-24  rotate-[-10deg] border-4 border-white object-cover"
          alt=""
        />
        <button className=" mt-14  h-10 rounded-sm bg-gradient-to-br from-purple-500 to-orange-400  px-4 text-lg font-semibold text-white">
          {" "}
          copy
        </button>
        <img
          src="footer2.jpg"
          className="mr-44 w-24 rotate-[10deg] border-4 border-white object-cover"
          alt=""
        />
      </div>
      <div className="flex h-16 items-center justify-between bg-[#181818]">
        <span className="flex md:gap-5 md:pl-20 ">
          <img src="facebook.png" className="w-7" alt="" />
          <img src="instagram.png" className="w-7" alt="" />
          <img src="twitter.png" className="w-7" alt="" />
          <img src="linkedin.png" className="w-7" alt="" />
        </span>
        <span className="flex font-semibold text-white md:gap-5 md:pr-20">
          <span>My Work</span>
          <span>Pricing</span>
          <span>About Me</span>
        </span>
      </div>
    </div>
  );
};

export default FooterSection;
