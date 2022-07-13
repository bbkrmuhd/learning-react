import React from "react";
import Color from "./Color.js";

export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }){
    if(!colors.length) return <div>No color found</div>;
    return (
    <div>
        {colors.map((color) => <Color 
        key={color.id} 
        {...color} 
        onRemove={onRemoveColor} 
        onRateColor={onRateColor}/>)}
    </div>
    )
}