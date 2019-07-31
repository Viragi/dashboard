import React from 'react';

export default function Cell(props){
    
        return(
            <div className="cell">
               {props.colIndex >0 
               ? <div className="leftArrow" onClick={()=>props.handleClick(true)}> &lt;</div> 
               : <div className="leftArrow hide" onClick={props.handleClick}> &lt;</div>} 
                <div className ="content"> {props.data}</div>
                {props.colIndex<3
                ?( <div className="rightArrow" onClick={()=>props.handleClick("right")}> &gt;</div>)
                :( <div className="rightArrow hide" onClick={props.handleClick}> &gt;</div>)}
                
            </div>
        )

}