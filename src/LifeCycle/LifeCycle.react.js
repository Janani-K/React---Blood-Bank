import React from 'react';
import ReactDOM from 'react-dom';
import ShowCity from '../ShowCity/ShowCity.react';


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name :'Rani',
            city :'Chennai'
        }
        console.log("+++CONSTRUCTOR CALLED+++")
    }

    componentDidMount(){
        console.log("***COMPONENT DID MOUNT CALLED***");
        const element = ReactDOM.findDOMNode(this);
        const child = element.firstChild;
        ReactDOM.render("Ramesh",child)
        console.log(element);
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate(){
        console.log("@@@COMPONENT DID UPDATE CALLED@@@");
    }

    change = () => {
        console.log("###CHANGE FIRED###")
        this.setState({city:"Mumbai"})
    }

    render() {
        console.log("===PARENT RENDER METHOD CALLED===")
        //this.setState({name:this.state.name+" di"}) // never ending loop
        return (
            <div >
                <h2>{this.state.name}</h2>
                <ShowCity city={this.state.city}></ShowCity>
                <button onClick={this.change}>UPDATE</button>
            </div>
        );
    }
}

export default LifeCycle;