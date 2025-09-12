import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

//can't called the useState() outside the component, only be called inside the component
// never used useState() hooks inside the if/else condition - its does not make sense
// let [btnNameReact, setBtnNameReact] = useState("Login");

export const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependecy array => useEffect is  called on every render
  // if dependecy array => useEffect is call on initial render(just once)
  // if deoendecy array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect rendered");
  }, [btnNameReact]);

  console.log("header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Aboutus</li>
          <li>Contactus</li>
          <li>Cart</li>

          <button
            className="btnlogin"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
