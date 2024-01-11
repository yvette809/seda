import React from "react";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaHireAHelper } from "react-icons/fa6";

/* const Achievement = () => {
  return (
    <>
      <div className="achievements container">
        <h1 className="text-center mt-4 font-weight-bolder">
          Our Achievements
        </h1>
        <div className=" achievements d-flex justify-content-between align-items-center container">
          <div className="workshops text-center workshop1 ">
            <p className="icon">
              <FaPeopleCarryBox />
            </p>
            <p>
              50
              <br /> Worshops Organised
            </p>
          </div>
          <div className="workshops text-center ">
            <p>
              <GiPlantsAndAnimals />
            </p>
            <p>
              65,000
              <br /> Trees Planted
            </p>
          </div>
          <div className="workshops text-center">
            <p>
              <FaHireAHelper />
            </p>
            <p>
              350
              <br /> Women Reached
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement; */
const Achievement = () => {
  return (
    <>
      <div className=" container">
        <h1 className="text-center mt-4 font-weight-bolder">
          Our Achievements
        </h1>
        <div className=" achievements  container  ">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1">
            <div className="workshops text-center workshop1  ">
              <p className="icon">
                <FaPeopleCarryBox />
              </p>
              <p>
                50
                <br /> Worshops Organised
              </p>
            </div>
            <div className="workshops text-center ">
              <p>
                <GiPlantsAndAnimals />
              </p>
              <p>
                65,000
                <br /> Trees Planted
              </p>
            </div>
            <div className="workshops text-center">
              <p>
                <FaHireAHelper />
              </p>
              <p>
                350
                <br /> Women Reached
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
