import React, { useState, useEffect } from "react";
import './Contact.css';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const Contact = () => {

  const [input,setInput] = useState({Name: "", Email: "", Message: ""});
  const {Name, Email, Message} = input;

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function Submit(e){
    e.preventDefault()
    const data = {Name, Email, Message}
    axios.post("http://localhost:5001/contact",data)
  }

  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Message, setMessage] = useState("");

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
            value={Name} 
            name="Name" onChange={handleChange}
            // onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="Email"
            value={Email}
            name="Email" onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            placeholder="Message"
            value={Message}
            name="Message" onChange={handleChange}
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={Submit}
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