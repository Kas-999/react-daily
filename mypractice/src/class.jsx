import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
    
    this.state={
            name:"",
            count:0
    }
}
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
        <button onClick={()=>this.setState(curent=>{
            return{
                count:curent.count+1}})}>+</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
