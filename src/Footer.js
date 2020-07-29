import React, { Component } from 'react'

import Contact from './Contact'

import demo from './images/logo.svg'

export default class Footer extends Component {
    render(){
        return(
            <div>
                <div className='footer center dark-background'>
                    <h3 className='light'>Contact</h3>
                    
                    <div className='hflex'>
                        <img name='github' src={demo}/>
                        <img name='linkedIn' src={demo}/>
                        <img src={demo}/>
                    </div>
                    <Contact/>
                </div>
            </div>
        )
    }
}