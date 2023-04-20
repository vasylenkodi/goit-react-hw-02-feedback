import React, {Component} from "react";

export default class Section extends Component {
    render() {
        return (
            <section>
                {this.props.title && <h2>{ this.props.title}</h2>}
                {this.props.children}
            </section>
        )
    }
}