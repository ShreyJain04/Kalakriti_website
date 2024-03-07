import React from "react";

const EventsCard = (props) => {
  const { img, name, date, caption } = props;
  return (
    <>
      <div
        class="overflow-hidden w-3/4 md:w-1/3  bg-white rounded-3xl m-4 shadow-lg flex flex-col justify-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="h-26 w-full  overflow-hidden">
          {" "}
          <img src={img} alt="Not found" class="w-auto h-64 " />{" "}
        </div>
        <div class="text-sm text-gray-500 text-lg font-my_font2 m-2">
          {date}
        </div>
        <div class="font-bold text-2xl font-my_font2 text-black m-2">
          {name}
        </div>
        <div class="text-gray-500 m-2 text-sm">
          <a href="" class="font-my_font3 text-xl ">
            {caption}
          </a>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
