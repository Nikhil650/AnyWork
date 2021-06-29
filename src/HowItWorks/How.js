import "./How.css";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function How() {
  return (
    <div className="how">
      <Navbar />
      <div className='how-main'>
                <div className='how-container1'>
                    <div className='how-wrapper1'>
                    <div className='how-item'>
                        <h1>Hello</h1>
                    </div>
                    <div className='how-item'>
                        <img src="assets/images/Forms-bro.png" />
                    </div>
                    </div>
                </div>
                <div className='how-container2'>
                    <div className='how-wrapper2'>
                    <div className='how-item'>
                        <img src="assets/images/Forms-bro.png" />
                    </div>
                    <div className='how-item'>
                        <h1>Hello</h1>
                    </div>
                    </div>
                </div>
                <div className='how-container3'>
                    <div className='how-wrapper3'>
                    <div className='how-item'>
                        <h1>Hello</h1>
                    </div>
                    <div className='how-item'>
                        <img src="assets/images/Forms-bro.png" />
                    </div>
                    </div>
                </div>
            </div>
      <Footer />
    </div>
  );
}

export default How;