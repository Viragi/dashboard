import React from 'react';
import Cell from "./Cell"

class Column extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tasks:[{
                heading:"Winnie",
                task:["Bring Avacado", "Do Leetcode"],
            },{
                heading:"Bob",
                task:["Bring Avacado", "Do Leetcode"]
            }, {
                heading:"Thomas",
                task:["Bring Avacado", "Do Leetcode"]
            }, {
                heading:"George",
                task:["Bring Avacado", "Do Leetcode"]
            }]
        }
    }
    handleClick =(col, row,isLeft)=>{
        console.log("HERE",col,row, isLeft);

    }
    render(){
        let elem = this.state.tasks.map((item,colI)=>{
            return(
                <div className="column">
                    <div className={item.heading + " header"}>{item.heading}</div>
                    <div className="cells">
                        {item.task.map((tsk,i)=>{
                            return(
                                <Cell data={tsk} colIndex = {colI} handleClick={(col,row,isLeft)=>this.handleClick(colI,i)}/>
                            )
                        })}


                    </div>
                 </div>   
            )
        })
        return(
            <div className="container">
                {elem}
            </div>
        )
    }
}

export default Column;