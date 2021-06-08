import "./SignIn_Up.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import AccountBox from "./AccountBox";

function SignIn_Up() {
  return (
    <div className="Sign">
      <Navbar />
    <div className = "SignContainer">
      <AccountBox />
    </div>
    <Footer />
    </div>
  );
}

export default SignIn_Up;
