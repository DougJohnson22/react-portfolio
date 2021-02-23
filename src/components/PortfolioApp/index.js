import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import "./style.css"

export default function PortfolioApp(props) {

    console.log(props.techArr)
    return (
        <div className="row">
            <div className="all">

                <div className="left">
                    <div className="text">
                        Technologies:
                        <ul>
                            {props.techArr.map(data => <li key={data}>{data}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="center">
                    <div className="portfolio">
                        <h3>{props.name}</h3>
                        <Image src={props.img} fluid className="portImg"/>
                        <Button variant="dark" className="liveBtn" href={props.live}>Deployed Site</Button>
                    </div>

                    <div className="right">
                        <a className="text" href={props.github}>GitHub Repo</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
