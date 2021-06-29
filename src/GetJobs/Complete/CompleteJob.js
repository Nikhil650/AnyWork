import React from 'react'
import './CompleteJob.css'
import Navbar from '../../components/Navbar/Navbar'
import Navbar1 from '../Navbar/Navbar1'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

function CompleteJob() {
    return (
        
        <div className="completejob">
            <Navbar />
            <Navbar1 />
            <div className='complete-main'>
                <Sidebar />
                <div className='complete-wrapper'>
                    <div className='complete-jobs'>
                        <div className="complete-container">
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
                        <div className="complete-container">
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
                        <div className="complete-container">
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
                        <div className="complete-container">
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
                    <div className='complete-jobs'>
                        <div className="complete-container1">
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
                        <div className="complete-container1">
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompleteJob
