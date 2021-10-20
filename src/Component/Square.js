import React from "react";
import '../App.css';

const Square = ({val,choseSquare}) => {
    return ( 
        <div className="square" onClick = {choseSquare}>
            {val}
        </div>
    );
}
 
export default Square;