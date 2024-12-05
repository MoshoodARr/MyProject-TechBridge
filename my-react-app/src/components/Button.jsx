import React from 'react'
import './index.scss'

function Button({click,bg, content}) {
  return (
    <button style={{backgroundColor:bg}} onClick={click}>
      {content}
      </button>
  )
}

export default Button


















// import React from "react";

// const Button = ({bg, click, font}) => {
//     return(
//         <div>
//             <button style={{backgroundColor: bg, fontFamily:font}} onClick={click}>welcome</button>
//         </div>
//     );
// };

// export default Button;