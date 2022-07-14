import React from "react";
import Color from "./Color";
import { useColors } from './color-hooks';

export default function ColorList(){
    const { colors } = useColors()
    if(!colors.length) return <div>No color found</div>;
    return (
    <div className="color-list">
        {colors.map((color) => <Color 
        key={color.id} 
        {...color} 
       />)}
    </div>
    )
}


// { colors = [], onRemoveColor = f => f, onRateColor = f => f }
// onRemove={onRemoveColor} 
// onRateColor={onRateColor}