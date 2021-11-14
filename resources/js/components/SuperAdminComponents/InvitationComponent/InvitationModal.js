import React from 'react';
import Modal from 'react-modal';
import AddInvitation from './AddInvitation'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'gray',
        color:'black'
    },
};

export default class InvitationModal extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open :false
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }
    openModal(){
        this.setState({open:true});
    }

    closeModal(){
        this.setState({open:false});
        this.props.reRenderInvitations()
    }

    render() {
        return (
            <div>
                <button className={'animated-button'} onClick={this.openModal}>Felhasználó meghívása</button>
                <Modal
                    isOpen={this.state.open}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Meghívó"
                    ariaHideApp={false}
                >
                    <h2>Hello</h2>
                    <AddInvitation closeModal={this.closeModal}/>
                </Modal>
            </div>
        );
    }

}

