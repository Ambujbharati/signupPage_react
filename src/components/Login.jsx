import React from "react";
import Input from "./Input";



function Login(props){

  const [isMouseOver, setMouseOver] = React.useState(false);
  const [fullName, setFullName] = React.useState({
    fName:"",
    lName:"",
    email:""
  });
  function handleChange(event){
    const {value, name} = event.target;

    setFullName(prevValue => {
      return {
        ...prevValue,
        [name]:value
      };
    })
  }

  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }

  return (
    <div>
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <p>{fullName.email}</p>
    <form className="form">
        {!props.isRegisterd && (<input 
          onChange={handleChange}
          type="text"
          placeholder="Firstname"
          name="fName"
          value={fullName.fName}
        />)}
        {!props.isRegisterd && (<input 
          onChange={handleChange}
          type="text"
          placeholder="Lastname"
          name="lName"
          value={fullName.lName}
        />)}
        {props.isRegisterd && (<input 
          type="text"
          placeholder="Username"
        />)}
        {!props.isRegisterd && (<input 
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
          value={fullName.email}
        />)}
        <input 
          type="password"
          placeholder="Password"
        />
        {!props.isRegisterd && (<Input type="password" placeholder="Confirm Password" />)}
        <button 
        style={{backgroundColor: isMouseOver? "black" : "white" }} 
        type="submit" 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
          {props.isRegisterd?"Login":"Register"}
        </button>
    </form>
    </div>
  );
}

export default Login;