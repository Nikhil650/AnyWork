import React, { useState, useEffect } from "react";
import './Contact.css';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
  };

  return (
    <>
    <Navbar />
    <div className='contact'>
      <div className='contact1'>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;