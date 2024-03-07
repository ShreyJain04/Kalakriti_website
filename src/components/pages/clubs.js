import React from "react";
import bg2 from "../images/bg2.jpg";
import bgi from "../images/bg5.jpg";
import { LeftCard, RightCard } from "../clubsCard";
import arr from "../jsonFiles/clubs.json";
import img1 from "../images/painting2.jpg";
import img2 from "../images/sketching2.jpg";
import img3 from "../images/penart.jpg";
import img4 from "../images/mandala2.jpg";
import img5 from "../images/fashion.jpg";
import bg from "../images/colorbg.webp";

const Clubs = () => {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        {/* <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${bg})` }}
      ></div> */}

        <main className="bg-slate-300 text-blue500 z-10">
          <div class="mt-24 md:mt-20 py-8 z-10">
            <div class="flex items-center justify-center my-2">
              <div class="flex-col space-y-4 text-center z-10">
                <h2 class="mb-4 text-4xl tracking-tight font-my_font1 text-gray-900 dark:text-white">
                  Our Clubs
                </h2>
                <div class="text-black font-medium text-2xl font-my_font3 ">
                  In our vibrant community, the canvas of creativity unfurls
                  with the brushstrokes of various art clubs.
                </div>
                <div class="flex items-center justify-center"></div>
              </div>
            </div>

            <div className="artCards ">
              <div class="flex justify-center ">
                <div class="invisible md:visible flex flex-col max-w-8xl justify-center items-center z-10">
                  <RightCard
                    img={img1}
                    heading={arr[0].heading}
                    description={arr[0].description}
                    members={arr[0].members}
                  />
                  <LeftCard
                    img={img2}
                    heading={arr[1].heading}
                    description={arr[1].description}
                    members={arr[1].members}
                  />
                  <RightCard
                    img={img3}
                    heading={arr[2].heading}
                    description={arr[2].description}
                    members={arr[2].members}
                  />
                  <LeftCard
                    img={bg2}
                    heading={arr[3].heading}
                    description={arr[3].description}
                    members={arr[3].members}
                  />
                  <RightCard
                    img={img4}
                    heading={arr[4].heading}
                    description={arr[4].description}
                    members={arr[4].members}
                  />
                  <LeftCard
                    img={bg2}
                    heading={arr[5].heading}
                    description={arr[5].description}
                    members={arr[5].members}
                  />
                  <RightCard
                    img={img5}
                    heading={arr[6].heading}
                    description={arr[6].description}
                    members={arr[6].members}
                  />
                  <LeftCard
                    img={bg2}
                    heading={arr[7].heading}
                    description={arr[7].description}
                    members={arr[7].members}
                  />
                </div>

                <div class="flex flex-col max-w-8xl md:hidden justify-center items-center z-10">
                  <LeftCard
                    img={img1}
                    heading={arr[0].heading}
                    description={arr[0].description}
                    members={arr[0].members}
                  />
                  <LeftCard
                    img={img2}
                    heading={arr[1].heading}
                    description={arr[1].description}
                    members={arr[1].members}
                  />
                  <LeftCard
                    img={img3}
                    heading={arr[2].heading}
                    description={arr[2].description}
                    members={arr[2].members}
                  />
                  <LeftCard
                    img={bg2}
                    heading={arr[3].heading}
                    description={arr[3].description}
                    members={arr[3].members}
                  />
                  <LeftCard
                    img={img4}
                    heading={arr[4].heading}
                    description={arr[4].description}
                    members={arr[4].members}
                  />
                  <LeftCard
                    img={bg2}
                    heading={arr[5].heading}
                    description={arr[5].description}
                    members={arr[5].members}
                  />
                  <LeftCard
                    img={img5}
                    heading={arr[6].heading}
                    description={arr[6].description}
                    members={arr[6].members}
                  />
                  <LeftCard
                    img={bg2}
                    heading={arr[7].heading}
                    description={arr[7].description}
                    members={arr[7].members}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <script src="https://cdn.tailwindcss.com"></script>
    </>
  );
};

export default Clubs;
