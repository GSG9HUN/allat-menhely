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
                <li key={index}>
                    <a href={element.path}>
                    <i   className = "tim-icons icon-chart-pie-36" />
                    <p>{element.title}</p>
                    </a>
                </li>
            )
        })

        console.log(this.state.navBar)
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
