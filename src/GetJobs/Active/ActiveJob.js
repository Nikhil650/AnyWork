import React from 'react'
import './ActiveJob.css'
import Navbar from '../../components/Navbar/Navbar'
import Navbar1 from '../Navbar/Navbar1'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

function ActiveJob() {
    return (
        
        <div className="activejob">
            <Navbar />
            <Navbar1 />
            <div className='active-main'>
                <Sidebar />
                <div className="active-container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Posted By</h4>
                    <h4>Cost</h4>
                    <div className="btn">
                        <div className='button1'>
                            <button>
                                View More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="active-container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Posted By</h4>
                    <h4>Cost</h4>
                    <div className="btn">
                        <div className='button1'>
                            <button>
                                View More
                            </button>
                        </div>
                    </div>
                </div>
                                
            </div>
            <Footer />
        </div>
    )
}

export default ActiveJob
