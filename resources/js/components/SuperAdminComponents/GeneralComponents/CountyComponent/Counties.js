import React from "react";
import ReactDOM from "react-dom";

export default class Counties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counties: []
        }
        this.getCounties = this.getCounties.bind(this)
        this.renderCounties = this.renderCounties.bind(this)
        this.reRenderCounties = this.reRenderCounties.bind(this)
    }

    getCounties(){
        axios.get('/api/counties').then((response)=>{
            console.log(response)
            this.setState({
                counties:response.data.counties
            })
        })
    }

    renderCounties(){
        return this.state.counties.map((county,index)=>{
            return(
                <tr key={index}>
                    <td>{county.id}</td>
                    <td>{county.name}</td>
                </tr>
            )
        })
    }

    reRenderCounties(){
        this.getCounties()
    }


    componentDidMount() {
        this.getCounties()
    }


    render() {
        return (
            <>
                <table className={'data-table'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Megye név</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCounties()}
                    </tbody>
                </table>
            </>
        )
    }
}

if (document.getElementById('general.counties')) {
    ReactDOM.render(<Counties/>, document.getElementById('general.counties'))
}
