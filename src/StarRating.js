import React from 'react';
import { FaStar } from "react-icons/fa"; 


const Star = ({ selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
  )
  
  let createArray = length => [...Array(length)];
  
  export default function StarRating({totalStars = 5, selectedStars = 0, onRate = f => f}){
  
    return (
    <>
    {createArray(totalStars).map((n, i) => (
    <Star 
    key={i} 
    selected={ selectedStars > i}
    onSelect={() => onRate(i + 1)}
    />  ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
    </>
    );
  }
  