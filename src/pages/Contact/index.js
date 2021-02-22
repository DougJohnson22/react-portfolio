import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"

export default function Contact() {
    return (
        <div>
            <div>
                <Jumbotron className="Banner" fluid style={{ backgroundImage: "url('https://i.postimg.cc/nzzGHJZv/Terms-Policies-Web-Banner.png')" }}>

                    <div className="jumboBlock">
                        <h1>Contact Me</h1>
                    </div>

                </Jumbotron>
            </div>
        </div>
    )
}
