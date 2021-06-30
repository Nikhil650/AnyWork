import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Navbar2 from '../Navbar/Navbar2';
import './Bids.css'
import AddIcon from '@material-ui/icons/Add';


function ActiveBids() {
    return (
        <div className='bids'>
            <Navbar />
            <Navbar2 />
            <div className='bids_main'>
                <div className="bids_container">
                    <Link to='/post/add'>
                    <AddIcon className='icon' />
                    </Link>
                </div>
                <div className="bids_container">
                    <h2>Job Title</h2>
                    <p>Description</p>
                    <h4>Category</h4>
                    <h4>Hired</h4>
                    <h4>Cost</h4>
                    <div className="btn">
                        <div className='button1'>
                            <button>
                                 View More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bids_container1">
                    <div className='bid-wrapper1'>
                            <h4>Title</h4>
                            <p>Details</p>
                            <h4>Due Date</h4>
                            <div className="btn">
                                <div className='button1'>
                                    <button>
                                        View Bids
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bid-wrapper2'>
                            <h4>Bids</h4>
                            <div className='bid-wrapper3'>
                                <div className='bid-profile'>
                                                
                                </div>
                                <div className='bid-profile'>

                                </div>
                                <div className='bid-profile'>

                                </div>
                            </div>
                            <div className='bid-wrapper3'>
                                <div className='bid-profile'>
                                                
                                </div>
                                <div className='bid-profile'>

                                </div>
                                <div className='bid-profile'>
                                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="bids_container">
                    <h2>Name</h2>
                    <h4>Contact</h4>
                    <h4>Qualification</h4>
                    <h4>Job History</h4>
                    <div className="btn">
                        <div className='button1'>
                            <button>
                                 Select
                            </button>
                        </div>
                    </div>
                </div>            
            </div>
            <Footer />
        </div>
    )
}

export default ActiveBids;
