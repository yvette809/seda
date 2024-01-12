import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import logo from "../assets/logo-01.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className=" row row-cols-lg-3 row-cols-md-2 row-cols-sm-1  ">
          <div className="contact-us text-white font-weight-bolder px-5 pt-4 col">
            <h2 className="contact">Address</h2>
            <p>
              Alakuma ,Bamenda,
              <br />
              North West Region <br /> Cameroon
            </p>
            <p>anubofehwilli@gmail.com</p>
            <p>(00237) 680154066</p>
          </div>
          <div className="social text-white text-center font-weight-bolder pt-4 col">
            <h2 className=" mb-3">Social</h2>
            <a
              href="https://wwww.facebook.com/sedaache "
              className="icon mx-2 "
            >
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/sedaache " className="icon mx-2 ">
              <FaInstagramSquare />
            </a>
            <a href="https://bit.ly/3MHlu3B" className="icon mx-2">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com/@seda_ache" className="icon mx-2 ">
              <FaYoutube />
            </a>
          </div>

          <div className="contact-us text-white font-weight-bolder px-5 pt-4 col ">
            <h2 className="action mb-3">Take Action</h2>
            <Link to="/donation">
              <Button className="donate mb-2" variant="success">
                Donate
              </Button>
            </Link>

            <p>
              {" "}
              <Link to="/volunteer" className="volunteer-link">Volunteer</Link>{" "}
            </p>
            <Link to="/news" className="news-link"><p >News & Events</p></Link>
          </div>
        </div>
      </div>
      <div className="logo-signature d-flex justify-content-between pb-3 mt-3">
        <img src={logo} alt="Seda logo" className="logo2" />
        <p className="text-white">@Sedaache,2024</p>
        <a href="/#" className="home-pointer">
          <BsFillArrowUpCircleFill />
        </a>
      </div>
    </div>
  );
};

export default Footer;
