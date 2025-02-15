import "../style/Navbar.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function NavBar(props) {
  const navigate = useNavigate();
  console.log("nav",props.number)
  const [username, setUsername] = useState(sessionStorage.getItem("username") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("isLoggedIn"));


  useEffect(() => {
    const updateLoginState = () => {
      setUsername(sessionStorage.getItem("username") || "");
      setIsLoggedIn(!!sessionStorage.getItem("isLoggedIn"));
    };

    window.addEventListener("storage", updateLoginState);
    return () => window.removeEventListener("storage", updateLoginState);
  }, []);

  const count =
    typeof props.number === "object"
      ? Number(props.number?.count) || 0
      : props.number || 0;
  const [isCartVisible, setIsCartVisible] = useState(count > 0 || props.number);
  useEffect(() => {
    setIsCartVisible(count > 0 || props.number);
}, [count, props.number]);

const handelProduct = () => {
    navigate("/products", {
        state: count,
    });
};
  const handelLogin = () => {
    navigate("/Signin",{
      state:props.number
    })
};
const handelHome = () => {
    navigate("/", {
        state: count,
    });
  };
  
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Log out ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ok Good Byee!", "", "success");
        navigate("/Signin",{
          state:props.number
        });
        sessionStorage.clear();
        setUsername("");
        setIsLoggedIn(false);
      }
    });
  };


  const handleCartClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); 
      Swal.fire({
        icon: "warning",
        title: "Sign In Required!",
        text: "Please sign in first to access your cart.",
        confirmButtonText: "OK",
      });
      navigate("/Signin",{
        state:props.number
      })
    } else {
      navigate("/cart",{
        state:props.number
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="logo" title="Home" onClick={handelHome}>
          <p>Furniture</p>
          <img src="./logo.gif" />
        </div>
        <div className="pages">
          <a href="" className="home" onClick={handelHome}>
            home
          </a>
          <a
            href=""
            className="product"
            onClick={handelProduct}
            title="Products"
          >
            products
          </a>
          <a href="" className="cart"  onClick={handleCartClick} 
          >
            cart{" "}
            {isCartVisible && (
              <i className="fa-solid fa-bag-shopping">
                <p> {count} </p>
              </i>
            )}
          </a>
           {isLoggedIn ? (
          <a href="#" className="username" onClick={handleLogout}>
            {username} 
          </a>
        ) : (
          <a href="#" className="signin" onClick={handelLogin}>Sign In</a>
        )}
        </div>
      </div>
    </>
  );
}
