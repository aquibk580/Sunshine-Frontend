import React from "react";
import axios from "axios";
import banner from "../Images/Contact/banner.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [nameValidation, setNameValidation] = useState(false);
  const [validateFormat, setValidateFormat] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [phoneFormat, setPhoneFormat] = useState(false);
  const [phoneAlphabet, setPhoneAlphabet] = useState(false);
  const [messageValidation, setMessageValidation] = useState(false);
  const [validateAll, setValidateAll] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [noConnection,setNoConnection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setMessageSent(false);
    const { name, value } = e.target;

    if (name === "name" && value === "") {
      setNameValidation(true);
    } else if (name === "name" && value !== "") {
      setNameValidation(false);
    }
    if (name === "email" && value === "") {
      setEmailValidation(true);
      setValidateFormat(false);
    } else if (name === "email" && !value.includes("@")) {
      setEmailValidation(false);
      setValidateFormat(true);
    } else if (name === "email" && value.includes("@")) {
      setEmailValidation(false);
      setValidateFormat(false);
    }
    if (name === "mobileNumber" && value === "") {
      setPhoneFormat(false);
      setPhoneAlphabet(false);
      setPhoneValidation(true);
    } else if (name === "mobileNumber" && value !== "") {
      setPhoneValidation(false);
      if (value.split("").every((char) => !isNaN(char) && char !== " ")) {
        setPhoneAlphabet(false);
        setPhoneValidation(false);
        if (value.split("").length < 10 || value.split("").length > 11) {
          setPhoneFormat(true);
        } else {
          setPhoneFormat(false);
        }
      } else if (
        Array.from(value).map(
          (item) => item != 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9
        )
      ) {
        setPhoneAlphabet(true);
        setPhoneFormat(false);
      } else {
        setPhoneAlphabet(false);
        setPhoneFormat(false);
      }
    }
    if (name === "message" && value === "") {
      setMessageValidation(true);
    } else if (name === "message" && value !== "") {
      setMessageValidation(false);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" &&
      formData.email === "" &&
      formData.mobileNumber === "" &&
      formData.message === ""
    ) {
      setMessageValidation(false);
      setNameValidation(true);
      setEmailValidation(true);
      setPhoneValidation(true);
      setValidateAll(true);
    } else if (
      formData.name !== "" &&
      formData.email === "" &&
      formData.mobileNumber === "" &&
      formData.message === ""
    ) {
      setNameValidation(false);
      setEmailValidation(true);
      setPhoneValidation(true);
      setValidateAll(true);
      setValidateAll(true);
    } else if (
      formData.email !== "" &&
      formData.name === "" &&
      formData.mobileNumber === "" &&
      formData.message === ""
    ) {
      setNameValidation(true);
      setEmailValidation(false);
      setPhoneValidation(true);
      setValidateAll(true);
    } else if (
      formData.mobileNumber !== "" &&
      formData.email === "" &&
      formData.name === "" &&
      formData.message === ""
    ) {
      setNameValidation(true);
      setEmailValidation(true);
      setPhoneValidation(false);
      setValidateAll(true);
    } else if (
      formData.message !== "" &&
      formData.mobileNumber === "" &&
      formData.email === "" &&
      formData.name === ""
    ) {
      setMessageValidation(false);
      setNameValidation(true);
      setEmailValidation(true);
      setPhoneValidation(true);
      setValidateAll(true);
    } else {
      try {
        const response = await axios.post(
          "https://sunshine-backend.vercel.app/api/contact",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          setMessageSent(true);
          setFormData({
            name: "",
            email: "",
            mobileNumber: "",
            message: "",
          });
        }
        if (response.status === 400) {
        }
      } catch (error) {
        setNoConnection(true);
        console.error("Error:", error);
      }
    }
  };
  return (
    <div className="">
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Contact Us
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-row sm:mt-24 mt-16 sm:justify-around justify-center sm:flex-nowrap flex-wrap">
        <div className="flex flex-col mb-10 sm:mb-0 px-[5px] sm:px-0">
          <h1 className="text-base font-semibold opacity-80 mb-5">
            New Office Address
          </h1>
          <div>
            <h1 className="text-base font-semibold opacity-80">
              Sunshine Tours & Travels (IATA approved)
            </h1>
            <div className="text-base text-gray-500 w-[220px]">
              2nd Floor , Shanti Heights, Opp to Kunjvihaar, Raghoba Shankar
              Road, Station Road, Thane (W) - 400604, india,
              <p>
                <b>Tel:</b> +91 - 22 - 5845 6789
              </p>
              <p>
                <b>Fax:</b> +91 - 22 - 1938 6513
              </p>
              <p>
                <b>Email:</b> info@sunshine.com
              </p>
              <Link to="/admin">
                <p className="list-animation-nav">Admin : Aquib Khan</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold mb-5">Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <br />
            <input
              className="outline-none border-2  border-opacity-35 py-2 px-3 sm:w-[600px] w-[310px]"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            <br />
            <h1
              className={`${
                nameValidation === true ? "block" : "hidden"
              } text-red-600 text-sm`}
            >
              Please complete this required field
            </h1>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="outline-none border-2  border-opacity-35 py-2 px-3 sm:w-[600px] w-[310px]"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <br />
            <h1
              className={`${
                emailValidation === true ? "block" : "hidden"
              } text-red-600 text-sm`}
            >
              Please complete this required field
            </h1>
            <h1
              className={`${
                validateFormat === true ? "block" : "hidden"
              } text-red-600 text-sm`}
            >
              Email must be formatted correctly
            </h1>
            <br />
            <label htmlFor="mobileNumber">Mobile number</label>
            <br />
            <input
              className="outline-none border-2  border-opacity-35 py-2 px-3 sm:w-[600px] w-[310px]"
              type="tel"
              name="mobileNumber"
              onChange={handleChange}
              value={formData.mobileNumber}
            />
            <br />
            {phoneAlphabet === true && (
              <h1 className=" text-red-600 text-sm">
                A valid phone number may only contain numbers, +()-. or x
              </h1>
            )}
            {phoneFormat === true && (
              <h1 className=" text-red-600 text-sm">
                The number you enterred is not in range
              </h1>
            )}
            <h1
              className={`${
                phoneValidation === true ? "block" : "hidden"
              } text-red-600 text-sm`}
            >
              Please complete this required field
            </h1>
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              className="outline-none border-2  border-opacity-35 py-2 px-3 sm:w-[600px] w-[310px]"
              id="message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <br />
            <h1
              className={`${
                messageValidation === true ? "block" : "hidden"
              } text-red-600 text-sm`}
            >
              Please complete this required field
            </h1>
            <h1
              className={`${
                validateAll === true ? "block" : "hidden"
              } text-red-600 text-sm`}
            >
              Please complete all required fields
            </h1>
            {messageSent === true && (
              <h1 className=" text-green-600 text-sm">Message Sent!</h1>
            )}
            {noConnection === true && (
              <h1 className=" text-red-600 text-sm">An Error Occured</h1>
            )}
            <br />
            <input
              type="submit"
              className="px-6 py-[6px] border-2 text-white bg-[#ff7a59] font-bold hover:opacity-85 transition-all duration-200 opacity-100 cursor-pointer rounded-md"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-center my-16 sm:px-24 px-6">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.093468821788!2d72.97447207498034!3d19.191119482037347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b927201b8a85%3A0xc4abadc833300e35!2sStation%20Rd%2C%20Jambli%20Naka%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715342740711!5m2!1sen!2sin"
          className="h-[450px] w-[100%]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
