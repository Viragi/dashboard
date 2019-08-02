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
        let data= [...this.state.tasks];
        let reqRowData = data[col].task[row];
        data[col].task= data[col].task.filter((item,i)=>{
                            return i!=row;
                        });
        let newCol = isLeft ? col-1 : col+1;
        data[newCol].task = [...data[newCol].task, reqRowData];
        this.setState({
            ...this.state,
            task:data
        }) 

    }
    handleAddRow =(col)=>{
        let newRow = window.prompt();
        let data= [...this.state.tasks];
        data[col].task = [...data[col].task,newRow];
        this.setState({...this.state, 
                      tasks: data})

       
    }
    render(){
        let elem = this.state.tasks.map((item,colI)=>{
            return(
                <div className="column">
                    <div className={item.heading + " header"}>{item.heading}</div>
                    <div className="cells">
                        {item.task.map((tsk,i)=>{
                            return(
                                <Cell data={tsk} colIndex = {colI} moveRow={(isLeft)=>this.handleClick(colI,i,isLeft)}/>
                               )
                        })}
                    </div>
                    <div className="add_row" onClick ={()=>this.handleAddRow(colI)}>
                    <div>+</div>
                    <div className="addRow"> Add a Row</div>   
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