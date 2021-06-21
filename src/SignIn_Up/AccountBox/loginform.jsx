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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [input,setInput] = useState({Email: "", Password: ""});
  const {Email, Password} = input;

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function Submit(e){
    e.preventDefault()
    const data = {Email, Password}
    axios.post("http://localhost:5001/register/signup",data)
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={Email} name="Email" onChange={handleChange} />
        <Input type="password" placeholder="Password" value={Password} name="Password" onChange={handleChange} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={Submit}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}