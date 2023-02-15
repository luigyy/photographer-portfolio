import "./picker.css";
import { useState } from "react";
interface ProjectPickerProps {}

const ProjectPicker: React.FC<ProjectPickerProps> = ({}) => {
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
    return;
  };
  //
  return (
    <div className="flex h-screen bg-[#181818]">
      <div className="flex h-screen w-1/2 flex-col items-start gap-1 pt-16 pl-28  font-Cormorant text-5xl text-[#454545]">
        <button
          className="hover:text-white"
          onClick={() => changeImage("model")}
        >
          Model
        </button>
        <button
          className="hover:text-white"
          onClick={() => changeImage("fashion")}
        >
          Fashion
        </button>
        <button className="hover:text-white">Product</button>
        <button className="hover:text-white">Landscape</button>
        <button className="hover:text-white">Corporate</button>
        <button className="hover:text-white">Architecture</button>
        <button className="hover:text-white">Event Wedding</button>
        <button className="hover:text-white">Health & Wellnes</button>
        <button className="hover:text-white">Food & Restaurant</button>
      </div>
      {/* right div  */}
      <div className="h-screen w-1/2">
        <div className="relative mx-auto mt-14 h-[475px] w-[55%] overflow-y-clip">
          <img
            src="model.jpg"
            data-status="inactive"
            className=" img absolute"
            id="model"
          />
          <img
            src="fashion.jpg"
            data-status="active"
            className="img absolute"
            id="fashion"
          />

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
