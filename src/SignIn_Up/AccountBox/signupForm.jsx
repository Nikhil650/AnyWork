import React, { useContext, useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import axios from "axios";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [input,setInput] = useState({First_Name: "", Last_Name: "", Email: "", Password: ""});
  const {First_Name, Last_Name, Email, Password} = input;
  
  function handleChange(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function Submit(e){
    e.preventDefault()
    const data = {First_Name, Last_Name, Email, Password}
    axios.post("http://localhost:5001/register/signup",data)
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="First Name" value={First_Name} name="First_Name" onChange={handleChange} />
        <Input type="text" placeholder="Last Name" value={Last_Name} name="Last_Name" onChange={handleChange} />
        <Input type="email" placeholder="Email" value={Email} name="Email" onChange={handleChange} />
        <Input type="password" placeholder="Password" value={Password} name="Password" onChange={handleChange} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={Submit}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}