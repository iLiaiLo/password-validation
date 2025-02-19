import React from 'react';
import "./form.css";

const Form = ({handleChange}) => {
  return (
    <form className="form">

        <input type="text"
        className="input"
        name="username"
        onChange={handleChange}
        placeholder="enter username"
        pattern=".{6,}"
        autocomplete="off"
        required/>

        <input type="email"
        name="email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        className="input"
        onChange={handleChange}
        placeholder="enter email"
        autocomplete="off"
        required />

        <input type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        className="input"
        onChange={handleChange}
        name="password"
        placeholder="enter password"
        autocomplete="off"
        required />

        <button className="form-button" type="submit">Submit</button>
    </form>
  )
}

export default Form