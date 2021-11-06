import React from "react";
import ReactDOM from "react-dom";
import InvitationModal from "./InvitationModal";


export default class Invitation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invitations: [],
            token : document.querySelector('meta[name="csrf-token"]')
        }

        this.renderInvitations = this.renderInvitations.bind(this)
        this.reRenderInvitations = this.reRenderInvitations.bind(this)
        this.getInvitations = this.getInvitations.bind(this)

    }


    getInvitations() {
        axios.get('/api/invitations'
        ).then((response) => {
            this.setState({
                invitations:[...response.data.invitations]
            })
        })
    }

    reRenderInvitations() {
        this.getInvitations()
    }


    renderInvitations() {
        return this.state.invitations.map((invitation, index) => {
            return(
                <tr key={index}>
                    <td>{invitation.id}</td>
                    <td>{invitation.email}</td>
                    <td>{invitation.invitation_token}</td>
                    <td>{invitation.registered_at}</td>
                </tr>
            )
        })
    }

    componentDidMount() {
        this.getInvitations();
    }

    render() {
        return (
            <div>
                <table className={'data-table'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Meghívó kód</th>
                            <th>Regisztrációs dátum</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderInvitations()}
                    </tbody>
                </table>
                <div className={'row-buttons'}>
                    <InvitationModal reRenderInvitations ={this.reRenderInvitations}/>
                </div>
            </div>
        )
    }

}

if (document.getElementById('invitations')) {
    ReactDOM.render(<Invitation/>, document.getElementById('invitations'))
}
