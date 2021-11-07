import React from "react";
import ReactDOM from "react-dom";
import SizeModal from "./SizeModal";


export default class Size extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizes: []
        }

        this.getSizes = this.getSizes.bind(this)
        this.renderSizes = this.renderSizes.bind(this)
        this.reRenderSizes = this.reRenderSizes.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
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
                    <td>
                        <div className={'button-img'}>
                            <div className={'edit'}>
                                <SizeModal reRenderCounties={this.reRenderSizes} toEdit={size}/>
                            </div>
                            <div className={'delete'}>
                                <button onClick={() => {
                                    this.handleDelete(size.id)
                                }}>Törlés
                                </button>
                            </div>
                        </div>
                    </td>
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

    handleDelete(id){
        axios.delete(`/api/size/${id}`).then(()=>{
            this.reRenderSizes()
        })
    }

    render() {
        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Méret</th>
                        <th>Műveletek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderSizes()}
                    </tbody>
                </table>
                <SizeModal reRenderSize={this.reRenderSize}/>
            </>
        )
    }
}

if(document.getElementById('general.size')){
    ReactDOM.render(<Size/>,document.getElementById('general.size'))
}
