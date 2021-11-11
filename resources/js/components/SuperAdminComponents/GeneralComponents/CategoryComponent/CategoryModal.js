import React from 'react';
import Modal from 'react-modal';
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'gray',
        color: 'black'
    },
};

export default class CategoryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.createAddForm = this.createAddForm.bind(this)
        this.createEditForm = this.createEditForm.bind(this)

    }

    openModal() {
        this.setState({open: true});
    }

    closeModal() {
        this.setState({open: false});
        this.props.reRenderCategories()
    }

    createEditForm() {
        return [
            <EditCategory closeModal={this.closeModal} toEdit={this.props.toEdit}/>,
            <button className={'btn btn-primary'} onClick={this.openModal}>Faj módosítása</button>
        ]
    }

    createAddForm() {
        return [
            <AddCategory closeModal={this.closeModal}/>,
            <button className={'btn btn-primary'} onClick={this.openModal}>Új faj hozzáadás</button>
        ]
    }

    render() {
        let form,button;
        if(this.props.toEdit){
            [form,button] = this.createEditForm()
        }else{
            [form,button] = this.createAddForm()
        }

        return (
            <div>
                {button}
                <Modal
                    isOpen={this.state.open}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Állat faj"
                    ariaHideApp={false}
                >
                    <h2>Hello</h2>
                    {form}
                </Modal>
            </div>
        );
    }

}
