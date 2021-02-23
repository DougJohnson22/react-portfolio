import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"
import Image from 'react-bootstrap/Image'

export default function Landing() {
    return (
        <div>
            <Jumbotron className="Banner" fluid style={{backgroundImage: "url('https://i.postimg.cc/tJn3VFky/Portfolio-Banner.png')"}}>
                
                <div className="jumboBlock">
                <h1>Welcome to my Portfolio</h1>
                </div>
            </Jumbotron>
<div className="container">
    <div className="row welcome">
        <h2>About Me</h2>
    </div>
    <div className="row">
        <span className="logoImg">
                    <Image src="https://i.postimg.cc/W152JrTH/Douglas-Johnson-1.png" fluid />
        </span>
    </div>
        <div className="row">
                    <p>Douglas Johnson is an aspiring coder enrolled in the UW Coding Bootcamp. Before enrolling in the Bootcamp, he has had a career in the alcohol/spirits industry. His most notable position was as a Cellar Master for Force Majeure Vineyards, an ultra-premium estate winery headed by Todd Alexander. While working for Force Majeure, he did several harvests overseas in New Zealand, working for the trailblazing winery of Ata Rangi under the supervision of Helen Masters. It is under the tutilage of these legendary Winemakers that he developed a keen sense of excellence in his work.</p>

                    <p>
                        After leaving the Wine Industry, Douglas pivoted over to the Seattle Beer Industry with Rooftop Brewery. Starting off as a brewer, he recognized that his penchant for presentation and trained senses would better serve the operation in their sales department. After establishing relationships with several large clients and growing his allocated accounts, he was promoted to Lead Sales Manager. Unfortunately, a week after that promotion, Washington State went into its first lockdown which removed the need for his in person sales techniques.
                    </p>
        </div>
</div>
            
        </div>
    )
}
