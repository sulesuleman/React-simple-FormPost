import React from 'react';
import axios from 'axios';

class CustomForm extends React.Component {
  
  state = { 
    Username: '',
    Password:'' 
  }
    
  handleSubmit = async (event,requestType) => {
    event.preventDefault();
    const Username=this.state.Username;
    const Password=this.state.Password;
   console.log(Password,Username);
    switch(requestType){
      case 'post':
        return axios.post('http://192.168.10.9:8000/api/Login/',{
          Password: Username,
          Username: Password
        })
        .then(res => console.log(res))
        .catch(error=> console.error(error));
        default:
          break;
      }
    
  };
 
  render() {
    return (
      <form onSubmit={(event)=>this.handleSubmit(
        event,
        this.props.requestType
      )}>
       
          <input 
            type="text" 
           
            onChange={event => this.setState({ Username: event.target.value })}
            placeholder="Enter title " 
            required 
          />
          <br/>
           <input 
            type="text" 
           
            onChange={event => this.setState({ Password: event.target.value })}
            placeholder="Enter content " 
            required 
          />
          <br/>
          <button type="primary">Go!</button>
        </form>
      );
    }
}
export default CustomForm;