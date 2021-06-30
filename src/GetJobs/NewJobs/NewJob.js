import React from 'react'
import './NewJob.css'
import Navbar from '../../components/Navbar/Navbar'
import Navbar1 from '../Navbar/Navbar1'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import CardGet from '../../components/Card/CardGet'


function NewJob() {
    return (
        
        <div className="newjob">
            <Navbar />
            <Navbar1 />
            <div className='new-main'>
                <Sidebar />
                <div className='new-wrapper'>
                    <div className='UI'>
                        <CardGet
                        title='Make a React application'
                        imageUrl=''
                        body='I want to make and deploy an application based on react with the backend connected in 2 weeks'
                        
                        />
                    </div>
                    <br/>
                    <div className='UI'>
                        <CardGet
                        title='Android Shopping Application'
                        imageUrl=''
                        body='I am planning to open a shop with products want a application'
                        />
                    </div>
                    <br/>
                    <div className='UI'>
                        <CardGet
                        title='Want Social Media posters'
                        imageUrl=''
                        body='I want Instagram posters in the size of 1080*1080'
                        />
                    </div>
                    <br/>
                    <div className='UI'>
                        <CardGet
                        title='Simple logo for agriculture company'
                        imageUrl=''
                        body='I want Instagram posters in the size of 1080*1080'
                        />
                    </div>
                </div>
                <div className='new-container'>
                    <div className='new-wrapper1'>
                        <h4>Title</h4>
                        <h4>Job By:</h4>
                        <p>Details</p>
                        <h4>Due Date</h4>
                        <h4>Contact Number</h4>
                        <h4>Email</h4>
                        <div className="btn">
                            <div className='button1'>
                                <button>
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='new-wrapper1'>
                        <h4>Submit Qualifications</h4>
                        <div className="btn">
                            <div className='button1'>
                                <button>
                                    Add File
                                </button>
                            </div>
                        </div>
                        <div className="btn">
                            <div className='button1'>
                                <button>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewJob


