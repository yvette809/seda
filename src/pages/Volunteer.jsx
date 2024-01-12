import React from "react";
import VolunteerForm from "../components/VolunteerForm";
import { CgEventbrite } from "react-icons/cg";
import { FaRegHandshake } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";

const Volunteer = () => {
  return (
    <>
      <div className="volunteer-container container text-center">
        <div className="volunteer-content">
          <h2 className="text-success">Volunteer with Us</h2>
          <p><em>Make a difference by joining our Team!</em></p>

          <section className="opportunities">
            <h2 className="text-success">Volunteering Opportunities</h2>
            <ul>
              <li>
                <CgEventbrite />
                <p className="mr-3">Event Coordination</p>
              </li>
              <li>
                <FaRegHandshake/>
                <p className="mr-3">Community Outreach</p>
              </li>
              <li>
                <GiTreeBranch />
                <p className="ml-3">Environmental Projects</p>
              </li>
            </ul>
          </section>

          <section className="why-volunteer">
            <h2 className="text-success">Why Volunteer with Us?</h2>
            <p><em>
              Volunteering with us provides an opportunity to <br />
              connect with our people, add value to the project,
              <br /> and make a positive impact on the community.</em>
            </p>
          </section>

          <VolunteerForm />

          <section className="impact">
            <h2 className="text-success">Volunteer Impact</h2>
            <p>
              See how our volunteers are making a difference in the community.
            </p>
            {/* I will include pics here */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
