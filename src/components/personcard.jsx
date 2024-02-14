import React, {Component} from "react";

class Personcard extends Component {
    render(){
        return(
            <>
            <h1>{this.props.person.firstName}, {this.props.person.lastName}</h1>
            <h4>Age: {this.props.person.age}</h4>
            <h4>Hair color: {this.props.person.haircolor}</h4>
            </>
        );
    };
}

export default Personcard;