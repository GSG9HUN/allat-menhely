import React from "react";
import * as navBar from './NavBarElements'
import ReactDOM from "react-dom";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBar:navBar['navBarElements']
        }

        this.renderElements = this.renderElements.bind(this)
    }

    renderElements() {

        return this.state.navBar.map((element,index)=>{
            return(
                <li style={{display:'flex'}} key={index}>
                    <a href={element.path}>
                        <img style={{width:20, height:20}} src={element.src} alt={element.alt}/>
                        <span style={{marginLeft:10}}>{element.title}</span>

                    </a>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="nav">
                {this.renderElements()}
            </ul>
        )
    }

}


if (document.getElementById('nav-bar')) {
    ReactDOM.render(<NavBar/>, document.getElementById('nav-bar'))
}
