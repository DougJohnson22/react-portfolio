import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"

export default function Portfolio() {
    return (
        <div>
            <Jumbotron className="Banner" fluid style={{ backgroundImage: "url('https://i.postimg.cc/NMKYRKBL/Parchment-Backdrop.png')" }}>

                <div className="jumboBlock">
                    <h1 >My Apps</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                </div>

            </Jumbotron>
        </div>
    )

}
