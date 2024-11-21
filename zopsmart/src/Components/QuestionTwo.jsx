import React, { useEffect, useState } from 'react'

const QuestionTwo = () => {
    const [color, setColor] = useState('green'); 

    useEffect(() => {
      let timer;
      if (color === 'green') {
        timer = setTimeout(() => setColor('yellow'), 3000); 
      } else if (color === 'yellow') {
        timer = setTimeout(() => setColor('red'), 2000);
      } else if (color === 'red') {
        timer = setTimeout(() => setColor('yellow'), 5000); 
        timer = setTimeout(() => setColor('green'), 2000); 
      }
      return () => clearTimeout(timer); 
    }, [color]); 
  
    const bulbStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: color,
      margin: '20px auto',
    };
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Traffic Light</h1>
        <div style={bulbStyle}></div>
      </div>
    );
  };
  


export default QuestionTwo