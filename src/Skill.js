import React, { Component } from 'react'

import cross from './images/close.svg'

class Skill extends Component{

    sendEvent = (event) => {
        // event.stopPropagation()
        this.props.skillActivityHandler(this.props.skill.name)
    }

    render(){
        return(
            <div 
                value={this.props.skill.name}
                className='skill'
                style={{backgroundColor: this.props.skill.active===true? this.props.skill.color : 'grey',color:this.props.skill.text}}
                onClick={(event) => this.sendEvent(event)}
            >
                <span className='text'>
                    {this.props.skill.name}
                </span>
                <img 
                    value={this.props.skill.name}
                    className='close' 
                    src={cross}
                    alt='Close icon'
                />
            </div>
        )
    }
}
export default Skill