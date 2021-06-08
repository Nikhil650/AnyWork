import React from 'react'
import CardJobs from '../components/Card/CardJobs';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function GetJobs() {
    return (
        <div className='getjobs'>
            <Navbar />
            <h1>Get Jobs Here..</h1>
            <Footer />
        </div>
    )
}

export default GetJobs;
