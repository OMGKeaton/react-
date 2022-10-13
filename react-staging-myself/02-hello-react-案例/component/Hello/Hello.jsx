import React, {Component} from 'react'

import hello from './Hello.css'

export default class Hello extends Component {
    render() {
        return (
            <div className={hello.bg}>hello</div>
        )
    }
}