import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount]= useState(initial)  
    
    const handleAdd =()=>{
        if (count <stock) {
            setCount(count+1)
        }
        else{
            alert(`compra maxima:`+ stock)
        }
    }

    const handleSubstract =()=>{
        if (count > initial) {
            setCount(count-1)
        }
        else{
            alert(`compra minima:`+ initial)
        }
    }

    const reset =()=>{
        setCount(initial);
    }

    return (
    <div className='Count'>
        <h2>{count}</h2>
        
        <button className='menos' onClick={handleSubstract}> - </button>
        
        <div>
        <button className='button'onClick={reset}>Reset</button>   
        <button className='button' onClick={() =>onAdd(count)}> Agregar al Carrito </button>     
        </div>

        <button className='mas' onClick={handleAdd}> + </button>
    </div>
  )
}





// const [count, setCount]= useState(parseInt(initial));

// const disminuir =()=>{
//     setCount(count - 1);
// }
// const aumentar =()=>{
//     setCount(count + 1);
// }
// useEffect(()=>{
//     setCount(parseInt(initial));
// },[initial])


// return (
// <div className='Count'>
//     <button disabled={count <= 1} onClick={disminuir}> - </button>
//     <span>{count}</span>
//     <button disabled={count >= stock} onClick={aumentar}> + </button>
//     <div>
//         <button disabled={stock<=0} onClick={()=>onAdd(count)}> Agregar al Carrito </button>
//     </div>
//     <button>Reset</button>
    
// </div>
// );
// }
