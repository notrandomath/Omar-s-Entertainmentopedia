import "./starRating.scss"
import { FaStar } from "react-icons/fa"
import { useState } from "react"


const StarRating = ({
    field,
    value,
    ...props
}) => {
    
    const [hover, setHover] = useState(null)
    const [rating, setRating] = useState(null)


  return <div className="starRating">

    {[...Array(10)].map((star, i)=>{
        const ratingValue = i + 1;

        return  (
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    {...field}
                    {...props}
                    value={ratingValue} 
                    onClick={()=>{
                        setRating(ratingValue);
                    }}
                />
                <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || rating) ? "#3d004d" : "#fae6ff"}
                    size={23}
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                />
            </label>
        );
    })}
    {rating}/10
  </div>
}

export default StarRating