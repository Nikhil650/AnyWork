import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from './Sidebar/Sidebar';
import Navbar1 from './Navbar/Navbar1';


function GetJobs() {
    return (
        <div className='getjobs'>
            <Navbar />
            <Navbar1 />
            <div className='getjobs-container'>
                <Sidebar />
                {/* <Router history={history}>
                    
                </Router> */}
               
            </div>
            <Footer />
        </div>
    )
}

export default GetJobs;
