import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Section extends Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        return (
            <section>
                {this.props.title && <h2>{ this.props.title}</h2>}
                {this.props.children}
            </section>
        )
    }
}