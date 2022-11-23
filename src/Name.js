import React, { Component } from "react";

class Name extends Component {
    render() {
        return (
            <div>
                <p>Ad: {this.props.ad}</p>
                <p>Soyad:{this.props.soyad}</p>
            </div>
        )

    }
}
export default Name