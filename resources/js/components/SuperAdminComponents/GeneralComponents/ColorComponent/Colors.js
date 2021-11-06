import React from "react";
import ReactDOM from "react-dom";


export default class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }

        this.getColors = this.getColors.bind(this)
        this.renderColors = this.renderColors.bind(this)
        this.reRenderColors = this.reRenderColors.bind(this)
    }

    getColors() {
        axios.get('/api/colors').then((response)=>{
            this.setState({
                colors:response.data.colors
            })
        })
    }

    renderColors() {
        return this.state.colors.map((color,index)=>{
            return(
                <tr key={index}>
                    <td>{color.id}</td>
                    <td>{color.name}</td>
                </tr>
            )
        })
    }

    reRenderColors() {
        this.getColors()
    }

    componentDidMount() {
        this.getColors()
    }

    render() {
        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Szín</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderColors()}
                    </tbody>
                </table>
            </>
        )
    }
}

if(document.getElementById('general.colors')){
    ReactDOM.render(<Colors/>,document.getElementById('general.colors'))
}
