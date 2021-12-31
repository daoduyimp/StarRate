import { useState } from "react";
import FaStars from "./star";
export default function Rate(props) {
    const {normalColor, ratedColer, containerStyle} = props;
    const [rate, setRate] = useState(0);
    function hoverHandler(index) {
        setHoverIdx(index +1)
    }
    function leaveHandler() {
        setHoverIdx(undefined)
    }
    function clickHandler(index) {
        setRate(index + 1)
    }
    const [hoverIdx, setHoverIdx] = useState(undefined) 
    return (
        <div style={containerStyle}>
            {Array(5)
            .fill(0)
            .map((star, index) => 
            <FaStars 
                color={(hoverIdx || rate) > index? ratedColer : normalColor} 
                filled={(hoverIdx || rate) > index}
                hoverHandler={() => hoverHandler(index)}
                leaveHandler={() => leaveHandler()}
                clickHandler={() => clickHandler(index)}
            />)}
            <p>Rating Star: {rate}</p>
        </div>
    )
}
