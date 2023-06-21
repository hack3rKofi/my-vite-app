import React from 'react';

// destructure the prop from the App.jsx to get the text prop and pass it to the function 
const Greeting = ({text}) => {
  return (<p>{text}</p>
  );
}

export default Greeting;
