import React from "react";
import ReactDOM from "react-dom";

export default class Species extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            species:[]
        }
        this.getSpecies = this.getSpecies.bind(this)
        this.renderSpecies = this.renderSpecies.bind(this)
        this.reRenderSpecies = this.reRenderSpecies.bind(this)
    }

    getSpecies(){
        axios.get('/api/species').then((response)=>{
            console.log(response)
            this.setState({
                species:response.data.species
            })
        })
    }

    renderSpecies(){
        return this.state.species.map((specie,index)=>{
            return(
                <tr key={index}>
                    <td>{specie.id}</td>
                    <td>{specie.name}</td>
                    <td>{specie.category.name}</td>
                    <td>{specie.hair_type}</td>
                </tr>
            )
        })
    }

    reRenderSpecies(){
        this.getSpecies()
    }

    componentDidMount() {
        this.getSpecies()
    }

    render() {
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Faj név</th>
                            <th>Állat név</th>
                            <th>Szőr típusa</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderSpecies()}
                    </tbody>
                </table>
            </>
        )
    }
}

if(document.getElementById('general.species')){
    ReactDOM.render(<Species/>,document.getElementById('general.species'))
}
