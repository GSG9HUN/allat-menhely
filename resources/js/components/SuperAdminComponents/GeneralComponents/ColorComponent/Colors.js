import React from "react";
import ReactDOM from "react-dom";
import ColorsModal from "./ColorsModal";


export default class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }

        this.getColors = this.getColors.bind(this)
        this.renderColors = this.renderColors.bind(this)
        this.reRenderColors = this.reRenderColors.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
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
                    <td>
                        <div className={'button-img'}>
                            <div className={'edit'}>
                                <ColorsModal reRenderColors={this.reRenderColors} toEdit={color}/>
                            </div>
                            <div className={'delete'}>
                                <button onClick={() => {
                                    this.handleDelete(color.id)
                                }}>Törlés
                                </button>
                            </div>
                        </div>
                    </td>
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

    handleDelete(id){
        axios.delete(`/api/colors/${id}`).then(()=>{
            this.reRenderColors()
        })
    }


    render() {
        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Szín</th>
                        <th>Műveletek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderColors()}
                    </tbody>
                </table>
                <ColorsModal reRenderColors={this.reRenderColors}/>
            </>
        )
    }
}

if(document.getElementById('general.colors')){
    ReactDOM.render(<Colors/>,document.getElementById('general.colors'))
}
