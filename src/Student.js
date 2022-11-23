import React, { Component } from "react";
import Name from "./Name.js";
import Kurs from "./Kurs.js";
import Group from "./Group.js";
import './index.css'

export default class Student extends Component {
    render() {
        const { ad, soyad, kurs, group, dersdedi } = this.props

        if (dersdedi) {
            return (
                <div className="block">
                    <Name ad={ad} soyad={soyad} />
                    <Kurs kurs={kurs} />
                    <Group Group={group} />
                </div>
            )
        }

    }
}
