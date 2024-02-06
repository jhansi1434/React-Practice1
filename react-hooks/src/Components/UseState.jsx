// import React, { useState } from 'react'



// const UseState = () => {
// const [Count,SetCount]=useState(0);

// const handleOnClick=()=>{
//     SetCount(Count+1)
// }

//   return (
//     <div>
//         <p>Count:{Count}</p>
//         <button onClick={()=>handleOnClick()}>click</button>
      
//     </div>
//   )
// }

// export default UseState



//class components

import React,{Component} from 'react'

class UseState extends Component{
    constructor(props){
    super(props)
    this.state={
count:0
    }
}
incrementCount=()=>{
    this.setState({
        count:this.state.count+1
    })
}

render(){
    return(
        <div>
    <button onClick={this.incrementCount}>Count:{this.state.count}</button>
        </div>
    );
    
};
}
export default UseState