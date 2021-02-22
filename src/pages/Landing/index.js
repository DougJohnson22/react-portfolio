import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"

export default function Landing() {
    return (
        <div>
            <Jumbotron className="Banner" fluid style={{backgroundImage: "url('https://i.postimg.cc/tJn3VFky/Portfolio-Banner.png')"}}>
                
                <div className="jumboBlock">
                <h1>Welcome to my Portfolio</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
                </div>

            </Jumbotron>
        </div>
    )
}
