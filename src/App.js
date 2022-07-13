import React, { useState } from 'react';
import './App.css';
import colorData from "./color.json";
import ColorList from "./ColorList";
import AddColorForm from './AddColorForm';
import { v4 } from "uuid";


console.log(colorData, "colo")
export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
  <>
  <AddColorForm onNewColor={(title, color) => {
    const newColors = [...colors, {id : v4(), rating: 0, title, color}]
    setColors(newColors)
  }}
  />
  <ColorList 
colors={colors}
 onRateColor={(id, rating) => { 
  const newRating = colors.map((color => 
    color.id === id ? {...color, rating} : color)); 
    setColors(newRating)
}} 
onRemoveColor={id => { 
  const newColors = colors.filter(color => color.id !== id);
  setColors(newColors)
}}
/>
  
  </>

  )
}
