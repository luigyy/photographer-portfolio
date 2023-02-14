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
    console.log(current);
    direction === "right"
      ? (current = Math.max((current -= slide), -50))
      : (current = Math.min((current += slide), 0));
  }

  return (
    <div className="relative h-72 overflow-x-clip bg-[#2d2a24] font-main">
      <div className="flex items-center justify-between">
        <h1 className="px-2 pl-28 pt-14 text-xl text-[#e4b350]/90">
          — My Recent Projects
        </h1>
        <div className="flex gap-2 pt-14 pr-28">
          <button
            id="button-right"
            className="rounded-full text-4xl text-white"
            onClick={() => move("left")}
          >
            ←
          </button>
          <button
            className="rounded-full text-4xl text-white"
            onClick={() => move("right")}
          >
            →
          </button>
        </div>
      </div>

      <div className="absolute mt-20 h-80 min-w-full">
        <div id="slider" className="flex h-full w-full translate-x-28 gap-4 ">
          <div className="h-full w-64">
            <img
              src="project1.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-64">
            <img
              src="project2.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-64">
            <img
              src="project3.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-64">
            <img
              src="project4.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-64">
            <img
              src="project5.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-64">
            <img
              src="project5.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-64">
            <img
              src="project5.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
