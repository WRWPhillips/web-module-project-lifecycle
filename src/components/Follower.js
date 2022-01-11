import React from 'react';

export default class Follower extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render(){
        if(this.props.follower){
            return (
                <div>
                    <img src={this.props.follower.avatar_url} alt="follower avi"/> 
                    <h3>{this.props.follower.login}</h3>
                </div>
            )
        }else{
            return (
                <p>................</p>
            )
        } 
    }
}