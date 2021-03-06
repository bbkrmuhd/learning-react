import React from "react";
import StarRating from "./StarRating.js";
import {FaTrash} from "react-icons/fa";
import { useColors } from "./color-hooks.js";



export default function Color({ id, title, color, rating}){
    const {addRating, removeColor} = useColors()
    return (
        <section>
            <h1>{ title }</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor : color}} />
            <StarRating selectedStars={rating} onRate={rating    => addRating(id, rating)} />
        </section>
    )
}