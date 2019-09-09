import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Button} from 'reactstrap'
import swal from 'sweetalert';
import '../Assets/Login.css';
import { connect } from 'react-redux';
import { login } from '../Redux/Actions/Login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: [],
        };
    
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {    
        const userAdd = () => {
          this.state.user.push({
            kasir_user: this.state.kasir_user,
            password: this.state.password
          });
          add()
          this.setState((prevState) => ({
            modal: !prevState.modal
          }));
        };
        console.log(this.state.user[0])
        let add = async () => {
          await this.props.dispatch(login(this.state.user[0]))
        };
        return (
            <div className='bodyLogin'>
                {localStorage.jwtToken != undefined ? <Redirect to='/' /> :
                <div className="loginbox">
                    <h1>Login Here</h1>
                    <form>
                        <p>ID Kasir</p>
                        <input 
                        type="text" 
                        name="kasir_user" 
                        placeholder="ID"
                        onChange={(e) => this.setState({ kasir_user: e.target.value })} />
                        <p>Password</p>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password"
                        onChange={(e) => this.setState({ password: e.target.value })} />
                        {/* <Link to='/'> */}
                        <Button className="btn btn-lg btn-success btn-block text-uppercase" color="" onClick={userAdd.bind(this)}>
                Sign In
              </Button>
                        {/* </Link> */}
                    </form>
                </div>}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      login: state.login
    };
  };
  export default connect(mapStateToProps)(Login);
