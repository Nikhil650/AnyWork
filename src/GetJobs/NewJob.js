import React from 'react'
import './NewJob.css'
import Navbar from '../components/Navbar/Navbar'
import Navbar1 from './Navbar/Navbar1'
import Sidebar from './Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

function NewJob() {
    return (
        
        <div className="newjob">
            <Navbar />
            <Navbar1 />
            <div className='new-main'>
                <Sidebar />
                <div className="new-container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Posted By</h4>
                    <h4>Cost</h4>
                </div>
                {/* <div className="new-container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Posted By</h4>
                    <h4>Cost</h4>
                </div>
                <div className="new-container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Posted By</h4>
                    <h4>Cost</h4>
                </div>
                <div className="new-container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Posted By</h4>
                    <h4>Cost</h4>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default NewJob
