interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = ({}) => {
  return (
    <div className="  min-h-[63vh] overflow-hidden bg-[#2d2a24]">
      <h1 className="pt-14 text-center text-3xl text-[#e4b350]">
        — Feel free to reach out
      </h1>
      <h1 className="px-2 pt-2 text-center text-5xl text-zinc-200">
        hello@johndoe.com
      </h1>
      <div className="flex justify-between pb-10 md:pb-28 ">
        <img
          src="footer1.jpg"
          className="mt-7 w-24 rotate-[-10deg]  border-4 border-white object-cover md:mt-0 md:ml-44"
          alt=""
        />
        <button className=" mt-14  h-10 rounded-sm bg-gradient-to-br from-purple-500 to-orange-400  px-4 text-lg font-semibold text-white">
          {" "}
          copy
        </button>
        <img
          src="footer2.jpg"
          className="mt-7 w-24 rotate-[10deg] border-4 border-white object-cover md:mt-0 md:mr-44"
          alt=""
        />
      </div>
      {/* info section  */}
      <div className="flex h-16 items-center justify-between bg-[#181818]">
        <span className="flex gap-3 pl-5 md:gap-5 md:pl-20 ">
          <img src="facebook.png" className="w-5 md:w-7" alt="" />
          <img src="instagram.png" className="w-5 md:w-7" alt="" />
          <img src="twitter.png" className="w-5 md:w-7" alt="" />
          <img src="linkedin.png" className="w-5 md:w-7" alt="" />
        </span>
        <span className="flex gap-3 pr-5 font-semibold text-white md:gap-5 md:pr-20">
          <span>My Work</span>
          <span>Pricing</span>
          <span>About Me</span>
        </span>
      </div>
    </div>
  );
};

export default FooterSection;
