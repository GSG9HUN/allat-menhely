import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe:false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render() {
        return (
            <div className={'container'}>

                {this.state.errors
                    //&& <ErrorWriter errors={this.state.errors}/>
                }

                <form onSubmit={this.handleSubmit}>
                    <div className={'form-control'}>

                        <div className={'form-item'}>
                            <label>E-mail cím</label>
                            <input type={'email'} name={'email'} value={this.state.email} onChange={this.handleChange}/>
                        </div>

                        <div className={'form-item'}>
                            <label>Jelszó</label>
                            <input type={'password'} name={'password'} value={this.state.password}
                                   onChange={this.handleChange}/>
                        </div>

                        <div className={'form-group'}>
                            <input type={'checkbox'} value={this.state.rememberMe} onChange={this.handleChange} name={'rememberMe'}/>
                            <label>Remember me?</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>

                            <a className="btn btn-link" href='/password/reset'>Forgot Your Password?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
if (document.getElementById('login')) {
    ReactDOM.render(<Login/>, document.getElementById('login'))
}
