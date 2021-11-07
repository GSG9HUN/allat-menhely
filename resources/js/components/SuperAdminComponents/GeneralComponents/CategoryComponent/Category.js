import React from "react";
import ReactDOM from "react-dom";
import CategoryModal from "./CategoryModal";


export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.getCategories = this.getCategories.bind(this)
        this.renderCategories = this.renderCategories.bind(this)
        this.reRenderCategories = this.reRenderCategories.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    getCategories() {
        axios.get('/api/category').then((response) => {
            this.setState({
                categories: response.data.categories
            })
        })
    }

    renderCategories() {

        return this.state.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                        <div className={'button-img'}>
                            <div className={'edit'}>
                                <CategoryModal reRenderCategories={this.reRenderCategories} toEdit={category}/>
                            </div>
                            <div className={'delete'}>
                                <button onClick={() => {
                                    this.handleDelete(category.id)
                                }}>Törlés
                                </button>
                            </div>
                        </div>

                    </td>
                </tr>
            )
        })
    }

    handleDelete(id) {
        axios.delete(`/api/category/${id}`).then(() => {
            this.getCategories()
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
                        <th>ID</th>
                        <th>Állat megnevezés</th>
                        <th>Műveletek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCategories()}
                    </tbody>
                </table>
                <CategoryModal reRenderCategories={this.reRenderCategories}/>
            </>
        )
    }

}

if (document.getElementById('general.categories')) {
    ReactDOM.render(<Category/>, document.getElementById('general.categories'))
}
