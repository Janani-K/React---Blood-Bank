import React from 'react';
import Feedback from '../Feedback/Feedback.react';



class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount:0,
            dislikeCount:0
        }
    }

    incrementLike=()=>{
        this.setState({
            likeCount : this.state.likeCount+1
        })
    }

    incrementDislike=()=>{
        this.setState({
            dislikeCount : this.state.dislikeCount+1
        })
    }

    render() {
        console.log("render method is called")
        return (
            <div >
                <article>
                    <h1>Who can donate blood?</h1>
                    <p>
                        You are eligible to donate blood if you are in good health, weigh at least 110 pounds and are 17 years or older.
                        You are not eligible to donate blood if you: Have ever used self-injected drugs (non-prescription)
                        Had hepatitis Are in a high-risk group for AIDS The FDA regulation states that a male who has had sex with another male (MSM) at any time since 1977 is prohibited from donating as a volunteer 
                        (males who have had sex with other males are allowed to donate for their own health). Some health considerations or medications may require temporary deferral from donating blood. 
                        Donor eligibility is determined at the time of donation by trained personnel. See Basic Eligibility Guidelines for more details.
                    </p>
                    <p><span>Likes:</span>{this.state.likeCount}<span>Dislikes:</span>{this.state.dislikeCount}</p>
                    <Feedback likeAction={this.incrementLike} dislikeAction={this.incrementDislike}></Feedback>
                </article>
            </div>
        );
    }
}

export default Blog;