import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./login.css";
import {Link} from 'react-router-dom'

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        
      <form onSubmit={handleSubmit}>
      <h2 >To-Do App</h2>
        <FormGroup controlId="email" bsSize="large">
          <FormControl
            autoFocus
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Link to="/dashboard"><Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button></Link>
      </form>
    </div>
  );
}
