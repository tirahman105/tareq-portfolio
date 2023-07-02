import React, { useRef } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z2moc4z",
        "template_ivslmm9",
        form.current,
        "5zCAqXOd4ULJ5Kxsy"
      )
      .then(
        (result) => {
          console.log(result.text);
         
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your message has been sent successfully!",
          });
          form.current.reset(); // 
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Oops... Something went wrong. Please try again later.",
          });
        }
      );
  };
  return (
    <div id="contact-me">
      <SectionTitle heading={"Contact Me"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-blue-100 p-8 rounded-md flex justify-center items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Get in Touch
            </h2>
            <p className=" text-lg mb-4">Feel free to reach out to me!</p>
            <div className="flex items-center mb-4">
              <FaPhone className=" mr-2" />
              <span className="">+8801614048774</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className=" mr-2" />
              <a href="mailto:tirahman105@gmail.com" className="">
                tirahman105@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className=" mr-2" />
              <span className="">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center">
              <a
                href="https://web.facebook.com/tirahman"
                className=" text-3xl mr-4 hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl mr-4 hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-3xl mr-4 hover:text-blue-600">
                <FaInstagram />
              </a>
              <a
                href="https://bd.linkedin.com/in/dr-tareq-ibna-rahman-46b3401a7"
                className=" text-3xl mr-4 hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body bg-blue-100">
          <div className="bg-blue-100 p-8 rounded-md">
            <form  ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="text-blue-800 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border-blue-300 rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-blue-800 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border-blue-300 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-blue-800 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border-blue-300 rounded-md"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                type="submit"
              >
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
