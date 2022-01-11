import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(<div>
                <img src={this.props.user ? this.props.user.avatar_url : 'https://avatars.githubusercontent.com/u/90425165?v=4'} alt='user avi'/>
                <h2>{this.props.user ? this.props.user.name : 'William Phillips'}</h2>
                <p>({this.props.user ? this.props.user.login : 'WRWPhillips'})</p>
                <p>total repos: {this.props.user ? this.props.user.public_repos : '36'}</p>
                <p>total followers: {this.props.user ? this.props.user.followers : '3'}</p>
        </div>)
    }
}
export default User;