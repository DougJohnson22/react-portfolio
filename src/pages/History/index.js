import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"


export default function History() {
    return (
        <div>
            <div>
                <Jumbotron className="Banner" fluid style={{ backgroundImage: "url('https://i.postimg.cc/DzzxzsPJ/Spicy-2-1.png')" }}>

                    <div className="jumboBlock">
                        <h1>History</h1>
                        <p>
                            My history shows how I have always been a Full Stack developer
                </p>
                    </div>

                </Jumbotron>
            </div>
        </div>
    )
}
