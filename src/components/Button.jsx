import React,{Component} from 'react'

export class Button extends Component {
render(){
    let {className,buttonText,onClick} =this.props;
    return (

<button className=''>{buttonText}</button>

        )
}
}
