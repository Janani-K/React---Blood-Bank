// eslint-disable-next-line
import React from 'react';



class ShowProfile extends React.Component {

    url ="https://api.github.com/users/vatsank"
    constructor(props) {
        super(props);
        this.state = {
            profile:{},
            loaded:false
        }
    }

    componentDidMount(){
        fetch(this.url)
        .then(resp => resp.json())
        .then(profile => this.setState({profile, loaded:true}))
    }

    render() {
        if(!this.state.loaded){
            return(
                <div>
                    <h1>loading...</h1>
                </div>
            );

        } else {
            return (
                <div>
                    <p>{this.state.profile.name}</p>
                    <img src={this.state.profile.avatar_url} alt="Profile Picture"></img>
                </div>
            );
        }
    }
}

export default ShowProfile;