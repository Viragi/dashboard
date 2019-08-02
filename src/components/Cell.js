import React from 'react';

export default function Cell(props){
    
        return(
            <div className="cell">
               {props.colIndex >0 
               ? <div className="leftArrow" onClick={()=>props.moveRow(true)}> &lt;</div> 
               : null} 
                <div className ="content"> {props.data}</div>
                {props.colIndex<3
                ?( <div className="rightArrow" onClick={()=>props.moveRow(false)}> &gt;</div>)
                :null}
                
            </div>
        )

}