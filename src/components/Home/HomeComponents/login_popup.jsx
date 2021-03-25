import React from "react";
import "../../../css/popups.css";
import { SendPostRequest, SendGetRequest } from "../../../RequestHelpers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


export default function Login(props) {
  const [loginObj, setLoginObj] = useState({ email: "", password: "" });
  const [load,setLoad]=useState(false);
  const changeLoginObj = (e, inputName) => {
    loginObj[inputName] = e.target.value;
    setLoginObj(loginObj);
  };
  const dispatch = useDispatch();

  function signIn(e){
    setLoad(true);
    SendPostRequest(
      "http://ecvat.online/back/public/api/login",
      loginObj
    ).then((data) => {
      if (data !== "Wrong pass") {
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("user_type", data.user.type);
        window.localStorage.setItem("user_id", data.user.id);
        window.localStorage.removeItem("ccvState");
        let dataObj = data.user;
        dispatch({ type: "login", payload: dataObj });
      } else {
        Alert.error('Wrong login or password', {
          position: 'top-right',
          effect: 'slide',
          timeout: 2000
      });
        setLoad(false);
     }
  })
}
 

  return (
    <>
  
    <div className="popup-container">
      <div className="popup-main">
       {
         load&&<div className="preload-container">
         <img src={require("../../../img/ring-alt.svg")} alt="Loading..."/>
       </div>
       }
        
        <div className="popup-close-btn" onClick={() => props.ClickedBtn("")}>
          <img src={require("../../../img/close.svg")} alt="close" />
        </div>
        <div className="popup-title-conotainer">
          <span>Sign in</span>
        </div>
        <div className="popup-inputs-container">
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={(e) => changeLoginObj(e, "email")}
            onKeyPress={(e)=>{
              if(e.charCode==13) signIn()
            }}
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            onChange={(e) => changeLoginObj(e, "password")}
            onKeyPress={(e)=>{
              if(e.charCode==13) signIn()
            }}
            
          />
        </div>
        <div
          className="popup-btn"
          onClick={(e) =>signIn(e)}
        >
          Sign in
        </div>
      </div>
    </div>
    </>
  );

}
