import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import "./Form.css";


const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [Price, setPrice] = useState("");
  const [mob, setMobile] = useState("");
  const [deta, setDetail] = useState("");
  const [time, setTime] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
  };

  return (
      <>
      <Navbar />
      <Navbar2 />
      <div className='form-main'>
      <div className='form1'>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Job Details</h1>
            
            <div className='form-container'>
                <div className='form-group'>
            
                    <label>Title</label>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Job Description</label>
                    <textarea
                        placeholder="Write a short descriptipn"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <label>Time-Limit</label>
                    <input
                        placeholder="When do you need the project completed?"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <label>Cost</label>
                        <input
                            placeholder="how much will you pay?"
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='form-group1'>
            
                    <label>Mobile Number</label>
                    <input
                        placeholder="To reach you your Contact number will be needed"
                        value={mob}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <label>Job Details</label>
                    <textarea
                        placeholder="Explain the job in detail"
                        value={deta}
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>
                    
                </div>
            </div>

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

export default Form;

