import React from "react";
import Nav from "../../components/nav"


export default function Profilepage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <Nav />
                </div>
            </div>


            <div className="row text-center">
                <div className="Gallery col col-4">
                    <h1>Gallery</h1>
                </div>
                <div className="MainProf col col-5">
                    <h1>MainProf</h1>
                </div>
                <div className="Widgets col col-3">
                    <h1>Widgets</h1>
                </div>
            </div>
        </div>
    )
};
