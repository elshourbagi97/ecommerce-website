import "../style/item.scss"
import { useNavigate } from "react-router-dom";

export default function Item(props) {
  const navigate = useNavigate()

  const handelProductOne=()=>{
    navigate("/ProductDetails",{
      state:{
        image: props.thumbnail,
        title: props.title,
        category:props.category,
        price:props.price,
        description:props.description,
        rate:props.rate,
        numberOfCart:props.numberOfCart,
        cart:props.cart
      }
    }
  )
  console.log("item",props)
  }
    return (
      <div className="item" >
            <img src={props.thumbnail} alt={props.title}/>
            <p>{props.title}</p>
            <p className="price">{props.price}</p>
            <button className="button" title="More Detals"onClick={handelProductOne}></button>
      </div>
    );
  }