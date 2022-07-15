import React, { useEffect, useMemo, useLayoutEffect } from 'react';
import { useAnyKeyToRender } from './AnyKey';

function WordCount({ children = " "}) {
    useAnyKeyToRender();

    const words = useMemo(() => children.split(" "), [children]) 
    
    useEffect(() => {
      console.log("fresh render")
    }, [words]);

    return (
      <>      
      <p>{ children }</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
      </>
    )
}

export default function App() {
  useEffect(() => console.log("useEffect")); 
  useLayoutEffect(() => console.log("useLayoutEffect")); 
  return <div>ready</div>;
}
