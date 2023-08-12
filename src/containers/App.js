import React, { useState } from "react";
import Box from "../components/Box";
import Boxes from "../components/Boxes";

function App() {

  const [squares , setSquares ] = useState(Boxes);

  
  // function toggle(id){
    
  //     setSquares( prevSquares => {
  //       const newSquares = [];
  //       for( let i = 0 ; i < prevSquares.length ; i++){
  //         const currentSquare = prevSquares[i];
          
  //         if(currentSquare.id === id ){
  //           const updatedSquare = {
  //             ...currentSquare,
  //             on: !currentSquare.on
  //           }
  //           newSquares.push(updatedSquare);
  //         } else {
  //           newSquares.push(currentSquare);
  //         }
  //       }
  //       return newSquares;
  //     })
  
    
  // }


  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? {...square, on:!square.on} : square ;
      })
    })
  }

  const newSquares = squares.map(square => {
    return <Box key={square.id} id={square.id} on={square.on} handleClick={toggle}/>
  })

  return (
    <div>
      {newSquares}
    </div>
  );
}

export default App;
