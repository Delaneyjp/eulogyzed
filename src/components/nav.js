import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <div className="container navbar">
                <h6 className="">EUGLOGYZD</h6>
                <ul className="nav float-right">
                    < li className="nav-item" >
                        <a className="nav-link active" alt="link" href="#">Active</a>
                    </li >
                    <li className="nav-item">
                        <a className="nav-link" alt="link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" alt="link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" alt="link" href="#">Disabled</a>
                    </li>
                </ul >
            </div >
        )
    };
};

export default Nav;