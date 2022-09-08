import React, { useContext, useRef, useState } from "react";

import UrlContext from "./store/url-context";

import classes from "../styles/UserInput.module.css";


const UserInput = () => {

   const [userInput, setUserInput] = useState({ input: '' });

   const inputRef = useRef();

   const { fetchData } = useContext(UrlContext);

   const inputHandler = (e) => {
      setUserInput({ input: e.target.value });
   };

   const submitHandler = (event) => {
      event.preventDefault();
      if (userInput.input.trim().length === 0) {
         return  inputRef.current.focus();
      }
      fetchData(userInput.input);
      setUserInput({input: ''});
   };


   return (
      <form className={classes.form} onSubmit={submitHandler}>
         <input
            placeholder="enter image url..."
            type="url"
            ref={inputRef}
            onChange={inputHandler}
            value={userInput.input} />
         <button type="submit">Detect</button>
      </form>
   );
}

export default UserInput;