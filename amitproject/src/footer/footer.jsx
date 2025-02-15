import { useRef, useState } from "react";
import {  Navigate, useNavigate} from "react-router-dom";
import "../style/footer.scss"
export default function Footer() {
  const userEmailRef = useRef("");
  const emailColorRef = useRef("");
  const emailBtnRef = useRef("");
  const [email, setEmail] = useState("");

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const validationEmail = () => {
    let inputValue = email.trim();

    let emailRe = /\w+@\w+.\w+/;
    if (inputValue.length === 0 || inputValue === "") {
      alert("please enter your email");
      userEmailRef.current.style.borderBottom = "3px solid red";
      emailBtnRef.current.style.color = "red";
    } else {
      if (emailRe.test(inputValue) === true) {
        userEmailRef.current.style.borderBottom = "3px solid green";
        emailColorRef.current.style.color = "green";
        emailBtnRef.current.style.color = "green";
      } else {
        alert("Please enter a valid email in the format: example@example.com");
        userEmailRef.current.style.borderBottom = "3px solid red";
        emailColorRef.current.style.color = "red";
        emailBtnRef.current.style.color = "red";
      }
    }
  };
  const handelEnter=(e)=>{
    if(e.key==="Enter"){
      e.preventDefault()
      handleInput()
    }
   }
  
  return (
    <>
      <div className="footerContent">
        <div className="upFooter">
          <div className="logoFooter">
            <p style={{ textTransform: "capitalize" }}>Furniture</p>
          
          </div>
          <div className="middleparaFooter">
            <h3 style={{ fontWeight: "600",marginTop:"13px" }}>Planning your own furniture?</h3>
            <p style={{ fontSize: "14.5px" }}>
              Subscribe to our newsletter. Get the latest design trends & deals!
            </p>
          </div>
          <form className="emailFooter"  ref={userEmailRef}>
            <input
              className="emailFtr"
              type="email"
              onChange={handelEmail}
              ref={emailColorRef}
              value={email}
              placeholder="Enter Email ID"
            />
            <label className="emailLabel">
              <button
                title="checkEmail"
                className="validatBtn"
                onClick={validationEmail}
                onKeyDown={handelEnter}
              >
                <i ref={emailBtnRef} className="fa-solid fa-location-arrow"></i>
              </button>
            </label>
          </form>
        </div>
        <div className="dnfooter">
          <div className="btnlist">
            <a href="">About us</a>
            <a>Mobile</a>
            <a>Privacy</a>
            <a>Terms of use</a>
            <a>Career</a>
            <a>Customer Service</a>
          </div>
          <div className="socialMedia">
            <a href="https://www.facebook.com">
              <i title="Facebook"className="fa-brands fa-facebook"></i>
            </a>
            <a  href="https://www.instagram.com/">
              <i title="Instagram" className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com">
              <i title="Twitter" className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
