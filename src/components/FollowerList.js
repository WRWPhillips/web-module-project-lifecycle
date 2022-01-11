import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        {if(this.props.followers) {
            return(<div>
                {
                    this.props.followers.map(follower => {
                        console.log(follower);
                        return <Follower key={follower.id} follower={follower}/>
                    })
                }
            </div>)
        }else{
            return(<div>
                <h2>Loading Follower Cards....</h2>
                <Follower/>
                </div>)
                
            }
        }   
    }
}
export default FollowerList;