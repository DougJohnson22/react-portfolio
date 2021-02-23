import React from 'react'
import Button from 'react-bootstrap/Button'
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

            <div className="container">
                <div className="row">
                    <h2>My Contact Information</h2>
                </div>

                <div className="row wrapper">
                    <h5>Email: trunks22a@gmail.com</h5>
                    <Button variant="outline-primary" href="https://www.linkedin.com/in/douglas-johnson-942ba2200/">Linked In</Button>
                    <Button variant="outline-primary" href="https://github.com/DougJohnson22">GitHub Repo</Button>
                    <Button variant="outline-primary" href="#">Resume</Button>
                </div>

            </div>
        </div>
    )
}
