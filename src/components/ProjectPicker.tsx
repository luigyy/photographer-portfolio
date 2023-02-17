import "./picker.css";
import { useState } from "react";
interface ProjectPickerProps {}

const ProjectPicker: React.FC<ProjectPickerProps> = ({}) => {
  const [activeField, setActiveField] = useState("");
  //
  const changeImage = (id: string) => {
    const images = document.getElementsByClassName("img");

    const deactivate = (img: any) => {
      img.dataset.status = "inactive";
    };

    //loop over the images and set them to inactive
    for (let i = 0; i < images.length; i++) {
      if (images[i].id !== id) {
        deactivate(images[i]);
      }
    }
    //activate target image
    const element = document.getElementById(id);
    if (element) {
      element.dataset.status = "active";
    }

    //set active field to change text color
    setActiveField(id);
    return;
  };
  //
  return (
    <div className="flex h-[70vh] bg-[#181818] md:h-screen">
      <div className="flex h-screen w-1/2 flex-col items-start gap-1 divide-y divide-zinc-50/10 pt-16 pl-4  font-Cormorant  text-2xl text-[#454545] md:divide-none md:pl-28 md:text-5xl">
        {[
          { id: "model", title: "Model" },
          { id: "fashion", title: "Fashion" },
          { id: "product", title: "Product" },
          { id: "landscape", title: "Landscape" },
          { id: "corporate", title: "Corporate" },
          { id: "architecture", title: "Architecture" },
          { id: "event-wedding", title: "Event & Wedding" },
          { id: "health-wellnes", title: "Health & Wellnes" },
          { id: "food-restaurant", title: "Food & Restaurant" },
        ].map((item) => (
          <button
            className={` text-left  hover:text-white ${
              activeField === item.id ? "text-white" : ""
            }`}
            onClick={() => changeImage(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* right div  */}
      <div className="h-screen  w-2/3  md:w-1/2  ">
        <div className="relative mx-auto mt-14 h-[475px] w-[70%] overflow-y-clip md:w-[55%]">
          {[
            "model",
            "fashion",
            "product",
            "landscape",
            "corporate",
            "architecture",
            "event-wedding",
            "health-wellnes",
            "food-restaurant",
          ].map((item) => (
            <img
              src={`${item}.jpg`}
              data-status="active"
              className="img absolute"
              alt={item}
              id={item}
              loading="lazy"
              key={item}
            />
          ))}
          <div className="absolute -left-6 top-36 h-14 w-14 rounded-full bg-[#ffbb25] ring-4 ring-[#181818]">
            <img
              src="arrow.png"
              className="ml-2 mt-1 w-10 rotate-[135deg]"
              alt=""
            />
          </div>
          {/* <div className="mx-auto mt-16 h-[450px] w-full bg-[url('model.jpg')] bg-cover bg-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPicker;
