import React from "react";
import ReactDOM from "react-dom";


export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.getCategories = this.getCategories.bind(this)
        this.renderCategories = this.renderCategories.bind(this)
        this.reRenderCategories = this.reRenderCategories.bind(this)
    }

    getCategories() {
        axios.get('/api/category').then((response) => {
            this.setState({
                categories: response.data.categories
            })
        })
    }

    renderCategories() {

        return this.state.categories.map((category,index)=>{
            return(
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                </tr>
            )
        })
    }

    reRenderCategories() {
        this.getCategories()
    }

    componentDidMount() {
        this.getCategories()
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <td>
                            ID
                        </td>
                        <td>
                            Állat megnevezés
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCategories()}
                    </tbody>
                </table>
            </>
        )
    }

}

if (document.getElementById('general.categories')){
    ReactDOM.render(<Category/>,document.getElementById('general.categories'))
}
