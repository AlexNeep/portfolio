import React, { Component } from 'react'

export default class Nav extends Component {
    render(){
        return (
            <nav>
                <div className='nav-container'>
                <div className='nav-items'> 
                    <div className='nav-item'>
                    Home
                    </div>
                    <div className='nav-item'>
                    Portfolio
                    </div>
                    <div className='nav-item'>
                    About
                    </div>
                </div>
                </div>
            </nav>
        )
    }
}
