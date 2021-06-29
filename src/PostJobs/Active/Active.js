import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Navbar2 from '../Navbar/Navbar2';
import './Active.css'
import AddIcon from '@material-ui/icons/Add';


function Active() {
    return (
        <div className='active'>
            <Navbar />
            <Navbar2 />
            <div className='active_main'>
                <div className="active_container">
                    <Link to='/post/add'>
                    <AddIcon className='icon' />
                    </Link>
                </div>
                <div className="active_container">
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
            </div>
            <Footer />
        </div>
    )
}

export default Active;
