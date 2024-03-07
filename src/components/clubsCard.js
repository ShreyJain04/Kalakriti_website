import React from "react";

import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

const CollapseDefault = (props) => {
  const { members } = props;
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={toggleOpen}>Members</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>{members}</Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export const LeftCard = (props) => {
  const { img, heading, description, members } = props;
  return (
    <>
      <div
        class="overflow-hidden w-3/4 rounded-3xl bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center "
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="h-26 w-full overflow-hidden">
          {" "}
          <img src={img} alt="" class="w-64 h-60" />{" "}
        </div>
        <div class="grid p-2">
          <div class="font-bold text-3xl text-black m-4 mt-10  font-my_font2 font-bold">
            {heading}{" "}
          </div>
          <div class="text-gray-500 mx-4 text-xl font-my_font3">
            {description} <br />
            <div class="pt-3 ">
              <CollapseDefault members={members} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const RightCard = (props) => {
  const { img, heading, description, members } = props;
  return (
    <>
      <div
        class="overflow-hidden w-3/4 rounded-3xl bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div class="grid p-2">
          <div class="font-bold text-3xl text-black m-4 mt-10 font-my_font2 font-bold">
            {heading}{" "}
          </div>
          <div class="text-gray-500 mx-4 text-xl font-my_font3">
            {description} <br />
            <div class="pt-3 ">
              <CollapseDefault members={members} />
            </div>
          </div>
        </div>
        <div class="h-26 w-full overflow-hidden">
          {" "}
          <img src={img} alt="" class="w-64 h-60 float-right" />{" "}
        </div>
      </div>
    </>
  );
};
