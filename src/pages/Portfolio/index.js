import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import PortfolioApp from '../../components/PortfolioApp'
import "./style.css"


export default function Portfolio() {

    const Arr= {
        Despensa: ["JQuery", "Express", "Sequelize", "Express-Handlebars", "Bcrypt"],
        MoodTunes: ["AJAX","JQuery","HTML","CSS"],
        DayPlanner:["Moment.js", "JQuery", "HTML", "CSS"],
        NoteTaker:["Node.js", "Express", "Heroku"],
        BurgerBuilder:["Heroku", "JAWSdb", "Express", "Express-Handlebars", "MySQL"],
        Budget:["PWA","Manifests","Service Worker","MongoDB","Mongoose"]


    }
    return (
        <div>
            <Jumbotron className="Banner" fluid style={{ backgroundImage: "url('https://i.postimg.cc/NMKYRKBL/Parchment-Backdrop.png')" }}>
                <div className="jumboBlock">
                    <h1 >My Applications</h1>
                </div>
            </Jumbotron>
<div className="container">

            <PortfolioApp img="https://img.edilportale.com/product-thumbs/b_prodotti-21350-relfdd49444-bf00-4445-908c-4f95f45da01f.jpg" name="Despensa" github="'https://github.com/shame-wizards-apprentice/despensa'" techArr={Arr.Despensa} live="https://quiet-sands-24336.herokuapp.com/"/>

            <PortfolioApp img="https://img.edilportale.com/product-thumbs/b_ATELIER-MODERNE-Dedar-446030-reld9ebfc30.jpg" name="Mood Tunes" live="https://tbone8098.github.io/uw-jagged-little-pill/" github="https://github.com/Tbone8098/uw-jagged-little-pill" techArr={Arr.MoodTunes}/>

            <PortfolioApp img="https://lh3.googleusercontent.com/proxy/F8DtxmJ_Rob92CDxg9UPa3tkdKatElTDCmU62-rpRUS2-Dw1ROYNJmRymICzP9wLrX6NSg8H4eMQ5VW8oM-mvEBTBxMX8wmhictb0eWDVaeBYrHDiC-5x6KAo08NH-OSTKmmiHF87nX2SNz-I82L2iIHnO2gBG2EqkwjYwrptP5In6ELzpw3lG3a4r6NfrQ" github="https://github.com/DougJohnson22/Work-Day-Scheduler" live="https://dougjohnson22.github.io/Work-Day-Scheduler/" name="Day Planner" techArr={Arr.DayPlanner}/>
 
            <PortfolioApp img="https://img.edilportale.com/product-thumbs/b_daytona-elastron-409675-rel5a9fde2b.jpg" live="https://sheltered-spire-46134.herokuapp.com/" github="https://github.com/DougJohnson22/Note-Taker" name="Note Taker" techArr={Arr.NoteTaker}/>

            <PortfolioApp img="https://eef96b699a090652d417-4cb4fb1426f507672e7f99f3dfb91794.ssl.cf1.rackcdn.com/6793718.jpg" name="Build-A-Burger" github="https://github.com/DougJohnson22/Burger-Builder-ORM" live="https://young-bayou-14353.herokuapp.com/" techArr={Arr.BurgerBuilder}/>

            <PortfolioApp img="https://images.fabric.com/images/605/605/0511290.jpg" name="Budget Tracker" live="https://dj-budget-tracker.herokuapp.com/" github="https://github.com/DougJohnson22/budget-tracker-pwa" techArr={Arr.Budget}/>
</div>

        </div>
    )

}
