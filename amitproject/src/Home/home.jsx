import NavBar from "../navBar/navbar";
import Footer from "../footer/footer";
import { Navigate, useNavigate } from "react-router-dom";
import "../style/home.scss";

export default function Home(props) {
  const navigate = useNavigate()
  const handelBuyNow=()=>{
    navigate("/products",{
      state:props.state1
    }
    )
    
  }
  return (
    <div className="homecontainer">
      <div className="navBar">
        <NavBar number={props.state1}/>
      </div>
      <div className="div1">
        <div className="imgBG">
          <div className="innerDiv1">
            <p className="para1">New Arrival</p>
            <h2>Discover Our New Collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              eveniet!
            </p>
            <button onClick={handelBuyNow} title="Buy Now">Buy Now</button>
          </div>
        </div>
        <div className="shipping">
          <div className="track">
            <i className="fa-solid fa-truck"></i>
            <div>
            <p>Free Delivery.</p>
            <p className="lorem">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="hr24">
            <img className="h24" src="./24-7.png" />
            <div>
            <p>Support 24/7</p>
            <p className="lorem">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="shield">
            <img src="./shield.png" />
            <div>
              <p>100% Authentic</p>
              <p className="lorem">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div2">
        <h2>Inspiration Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="images2">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
        </div>
      </div>
      <div className="div3">
        <div className="left3">
          <h2>Beautify Your Space</h2>
          <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris.</p>
          <button onClick={handelBuyNow} title="Shop Now">Let's Shop Now</button>
        </div>
        <div className="right3"></div>
      </div>
      <div className="div4">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="images4">
          <div className="img41"></div>
          <div className="img42"></div>
          <div className="img43"></div>
        </div>
      </div>
      <div className="div5">
        <h2>How It Works</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="images5">
          <div className="img51"></div>
          <div className="img52"></div>
          <div className="img53"></div>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}
