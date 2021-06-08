import React from 'react'
import './Service.css';
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomeIcon from "@material-ui/icons/Home";


function Service() {
    return (
        <div className='service'>
            <Navbar />
            <div className='service-main'>
                <div className='service-container'>
                    <div className='service-wrapper'>
                    <div className='service-item'>
                        <Link
                        to='/getjobs'
                        className='service-links'><img src="assets/images/Forms-bro.png" />
                        <div className='service-title'><h1>GetJobs</h1></div></Link>
                    </div>
                    </div>
                    <div className='service-wrapper'>
                    <div className='service-item'>
                    <Link
                        to='/postjobs'
                        className='service-links'><img src="assets/images/Forms-bro.png" />
                        <div className='service-title'><h1>PostJobs</h1></div></Link>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service;
