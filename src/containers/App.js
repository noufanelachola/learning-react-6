import React, { useState } from "react";
import Box from "../components/Box";
import Boxes from "../components/Boxes";

function App() {

  const [squares , setSquares ] = useState(Boxes);


  const newSquares = squares.map(square => {
    return <Box key={square.id} id={square.id} on={square.on} />
  })

  return (
    <div>
      {newSquares}
    </div>
  );
}

export default App;
