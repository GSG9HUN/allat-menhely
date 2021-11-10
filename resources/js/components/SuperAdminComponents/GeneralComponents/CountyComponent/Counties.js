import React from "react";
import ReactDOM from "react-dom";
import CountiesModal from "./CountiesModal";

export default class Counties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counties: []
        }
        this.getCounties = this.getCounties.bind(this)
        this.renderCounties = this.renderCounties.bind(this)
        this.reRenderCounties = this.reRenderCounties.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    getCounties() {
        axios.get('/api/counties').then((response) => {
            this.setState({
                counties: response.data.counties
            })
        })
    }

    renderCounties() {
        return this.state.counties.map((county, index) => {
            return (
                <tr key={index}>
                    <td>{county.id}</td>
                    <td>{county.name}</td>
                    <td>
                        <div className={'button-img'}>
                            <div className={'edit'}>
                                <CountiesModal reRenderCounties={this.reRenderCounties} toEdit={county}/>
                            </div>
                            <div className={'delete'}>
                                <button onClick={() => {
                                    this.handleDelete(county.id)
                                }}>Törlés
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    reRenderCounties() {
        this.getCounties()
    }


    componentDidMount() {
        this.getCounties()
    }

    handleDelete(id){
        axios.delete(`/api/counties/${id}`).then(()=>{
            this.reRenderCounties()
        })
    }

    render() {
        return (
            <>
                <table className={'data-table'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Megye név</th>
                        <th>Műveletek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCounties()}
                    </tbody>
                </table>
                <CountiesModal reRenderCounties={this.reRenderCounties}/>
            </>
        )
    }
}

if (document.getElementById('general.counties')) {
    ReactDOM.render(<Counties/>, document.getElementById('general.counties'))
}
