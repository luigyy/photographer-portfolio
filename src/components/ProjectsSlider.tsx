import "./slider.css";
interface ProjectsSliderProps {}

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({}) => {
  var slide = 20;
  var current = 0;
  function move(direction: "left" | "right") {
    const slider = document.getElementById("slider");
    if (slider) {
      direction === "left"
        ? (slider.style.transform = `translate(${current + slide}%)`)
        : (slider.style.transform = `translate(${current - slide}%)`);
    }
    direction === "right"
      ? (current = Math.max((current -= slide), -50))
      : (current = Math.min((current += slide), 0));
  }

  return (
    <div className="relative h-72 overflow-x-clip bg-[#2d2a24] font-main">
      <div className="flex items-center justify-between">
        <h1 className="px-2 pl-5 pt-14 text-xl text-[#e4b350]/90 md:pl-28">
          — My Recent Projects
        </h1>
        <div className="flex gap-2 pt-14 pr-2 md:pr-28">
          <button
            id="button-right"
            className=" rounded-full text-6xl text-white hover:text-[#e4b350]"
            onClick={() => move("left")}
          >
            ←
          </button>
          <button
            className=" rounded-full text-6xl text-white  duration-1000 hover:text-[#e4b350]"
            onClick={() => move("right")}
          >
            →
          </button>
        </div>
      </div>

      <div className="absolute mt-20 h-80 min-w-full">
        <div id="slider" className="flex h-full w-full translate-x-28 gap-4 ">
          {["project1", "project2", "project3", "project4", "project5"].map(
            (item) => (
              <div className="info relative h-full w-64  backdrop-blur ">
                <img
                  src={`${item}.jpg`}
                  className="h-full w-full object-cover"
                  alt=""
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
