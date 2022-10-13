import React,{Componment} from 'react'
import Hello from "./component/Hello/Hello";
export default class App extends Componment {
    render(){
        return(
            <div> hello react</div>,
            <Hello></Hello>
        )
    }
}