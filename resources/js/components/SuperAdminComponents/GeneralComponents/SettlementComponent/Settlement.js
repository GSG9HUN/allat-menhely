import React from "react";
import ReactDOM from "react-dom";
import SettlementModal from "./SettlementModal";

export default class Settlement extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            settlement : []
        }

        this.getSettlement = this.getSettlement.bind(this)
        this.renderSettlement = this.renderSettlement.bind(this)
        this.reRenderSettlement = this.reRenderSettlement.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    getSettlement(){
        axios.get('/api/settlement').then((response)=>{
            this.setState({
                settlement :response.data.settlement
            })
        })
    }

    renderSettlement(){
        return this.state.settlement.map((settlement,index)=>{
            return(
                <tr key={index}>
                    <td>{settlement.id}</td>
                    <td>{settlement.name}</td>
                    <td>{settlement.county.name}</td>
                    <td>
                        <div className={'button-img'}>
                            <div className={'edit'}>
                                <SettlementModal reRenderSettlement={this.reRenderSettlement} toEdit={settlement}/>
                            </div>
                            <div className={'delete'}>
                                <button onClick={() => {
                                    this.handleDelete(settlement.id)
                                }}>Törlés
                                </button>
                            </div>
                        </div>

                    </td>
                </tr>
            )
        })
    }

    handleDelete(id){
        axios.delete(`/api/settlement/${id}`).then(()=>{
            this.getSettlement()
        })
    }

    reRenderSettlement(){
        this.getSettlement()
    }

    componentDidMount() {
        this.getSettlement()
    }

    render() {
        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Település neve</th>
                        <th>Megye neve</th>
                        <th>Műveletek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderSettlement()}
                    </tbody>
                </table>
                <SettlementModal reRenderSettlement={this.reRenderSettlement}/>
            </>
        )
    }

}

if(document.getElementById('general.settlement')){
    ReactDOM.render(<Settlement/>,document.getElementById('general.settlement'))
}
