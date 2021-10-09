import React from "react";
import ReactDOM from "react-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/registerUser', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
        }).then((response)=>{
            console.log(response)
        }).catch(err=>{
            this.setState({
                errors:err.response.data.errors
            })
        })
    }

    render() {
        return (
            <div>

                {this.state.errors
                //&& <ErrorWriter errors={this.state.errors}/>
                }

                <form onSubmit={this.handleSubmit}>
                    <div className={'form-control'}>
                        <div className={'form-item'}>
                            <label>Vezeték Név</label>
                            <input name={'firstName'} value={this.state.firstName} onChange={this.handleChange}/>
                        </div>

                        <div className={'form-item'}>
                            <label>Kereszt Név</label>
                            <input name={'lastName'} value={this.state.lastName} onChange={this.handleChange}/>
                        </div>

                        <div className={'form-item'}>
                            <label>Telefonszám</label>
                            <input type={'tel'} name={'phoneNumber'} value={this.state.phoneNumber}
                                   onChange={this.handleChange}/>
                        </div>

                        <div className={'form-item'}>
                            <label>E-mail cím</label>
                            <input type={'email'} name={'email'} value={this.state.email} onChange={this.handleChange}/>
                        </div>

                        <div className={'form-item'}>
                            <label>Jelszó</label>
                            <input type={'password'} name={'password'} value={this.state.password}
                                   onChange={this.handleChange}/>
                        </div>

                        <div className={'form-item'}>
                            <label>Jelszó megerősítése</label>
                            <input type={'password'} name={'passwordConfirm'} value={this.state.passwordConfirm}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

if (document.getElementById('register')) {
    ReactDOM.render(<Register/>, document.getElementById('register'))
}

