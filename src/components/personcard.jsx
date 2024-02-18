/* eslint-disable no-useless-constructor */
import React from "react";

class Personcard extends React.Component {
     constructor(props) {
       super(props);
       this.state = { count: 1, };
       this.age = this.props.person.age;
    }

    addAge = () => {
        this.setState({ count: this.state.count + 1, });
        this.age = this.props.person.age + this.state.count;
    }

    render(){
        return(
            <>
            <h1>{this.props.person.firstName}, {this.props.person.lastName}</h1>
            <h4>Age: {this.age}</h4>
            <h4>Hair color: {this.props.person.haircolor}</h4>
            <button onClick={this.addAge}>Birthday Button for {this.props.person.firstName}, {this.props.person.lastName}</button>
            </>
        );
    };
}

export default Personcard;