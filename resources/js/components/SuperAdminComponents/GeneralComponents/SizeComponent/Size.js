import React from "react";
import ReactDOM from "react-dom";


export default class Size extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizes: []
        }

        this.getSizes = this.getSizes.bind(this)
        this.renderSizes = this.renderSizes.bind(this)
        this.reRenderSizes = this.reRenderSizes.bind(this)
    }

    getSizes() {
        axios.get('/api/size').then((response)=>{
            this.setState({
                sizes:response.data.sizes
            })
        })
    }

    renderSizes() {
        return this.state.sizes.map((size,index)=>{
            return(
                <tr key={index}>
                    <td>{size.id}</td>
                    <td>{size.name}</td>
                </tr>
            )
        })
    }

    reRenderSizes() {
        this.getSizes()
    }

    componentDidMount() {
        this.getSizes()
    }

    render() {
        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Méret</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderSizes()}
                    </tbody>
                </table>
            </>
        )
    }
}

if(document.getElementById('general.size')){
    ReactDOM.render(<Size/>,document.getElementById('general.size'))
}
