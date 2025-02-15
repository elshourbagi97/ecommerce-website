import "../style/login.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  console.log("login",(props.state))
  const navigate = useNavigate();
  const users = [
    {
      email: "adhamsameh@gmail.com",
      password: "Air1234",
      userName: "Adham",
    },
    {
      email: "elshourbagi@gmail.com",
      password: "force1234",
      userName: "Elshourbagi",
    },
    {
      email: "adham97@hotmail.com",
      password: "Airforce1234",
      userName: "Adham Sameh",
    },
  ];
  const emailRef = useRef();
  const pwRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    const userIndex = users.findIndex(
      (item) => item.email === emailRef.current.value
    );
    if (userIndex !== -1) {
      const pwIs = users[userIndex].password;
      if (pwIs === pwRef.current.value) {
        navigate("/products", {
          state: props.state,
        });

        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", users[userIndex].userName);

        swal.fire(
          "Good job,Now you sign in!",
          `welcome ${users[userIndex].userName} 😍`,
          "success"
        );
        emailRef.current.style.border = "2px solid green";
        pwRef.current.style.border = "2px solid green";
      } else {
        swal.fire({
          title: "Wrong Password !!",
          text: "please Check your password",
          icon: "warning",
        });
        pwRef.current.style.border = "2px solid red";
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Email !!",
        footer: '<a href="#">Please check your Email</a>',
      });
      emailRef.current.style.border = "2px solid red";
    }
  };

  const handelcheck = () => {
    Swal.fire({
      title: "Do you want to Remeber you?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Remeber is not saved", "", "info");
      }
    });
  };
  return (
    <div className="loginContent">
      <img src="./login2.gif" alt="Login" />
      <p>Sign in</p>
      <form action="">
        <input
          type="email"
          ref={emailRef}
          className="text"
          placeholder=" ✉ Your Email"
        />
        <input
          type="password"
          ref={pwRef}
          className="text"
          placeholder="🔒 Password"
        />
        <div>
          <input type="checkbox" onChange={handelcheck} />
          <label>Remember me</label>
        </div>
        <input
          type="submit"
          className="submit"
          value="Sign in"
          onClick={handelSubmit}
          title="Signin"
        />
      </form>
      <div className="last">
        <h2>━━━ or continue with ━━━</h2>
        <div>
          <a href="https://account.apple.com/sign-in" title="Apple Account">
            <img src="./apple.png" alt="apple" />
          </a>
          <a href="https://accounts.google.com/signin" title="Google Account">
            <img src="./google.png" alt="google" />
          </a>
          <a href="https://facebook.com" title="Facebook Account">
            <img src="./facebook.png" alt="fcaebook" />
          </a>
        </div>
      </div>
    </div>
  );
}
