import React, { Component } from 'react';
import Link from './Link';
import '../website.css';
import warren from '../images/warren.JPG';
import pirate from '../images/piratebaby.png';
import jazz from '../images/jazz.JPG';
import daryn from '../images/daryn.jpg';
import basketball from '../images/basketball.JPG';
// import { isObjectTypeIndexer } from '@babel/types';

class About extends Component {
    constructor(props) {
        super(props);
        this.routeToExp = this.routeToExp.bind(this);
      }
    
      routeToHome() {
        const path = '/';
        this.props.history.push(path);

    }

    routeToExp() {
        const path = '/experiences';
        this.props.history.push(path);

    }

    routeToAbt() {
        const path = '/about';
        this.props.history.push(path);

    }
    render() {
        console.log("rendering proj");
        let about = [
            {img: pirate, desc: "Hi, I'm Warren. I was born and raised in Los Angeles, CA and am currently a student at UC Berkeley."},
            {img: jazz, desc: "I've played the trumpet for over 12 years and love jazz! Music has given me the amazing oppurtunity to tour and travel Japan, Spain, Portugal, Austria, Czech Republic and many other countries."},
            {img: daryn, desc: "I have a younger brother named Daryn!"},
            {img: basketball, desc: "I love playing basketball and one of my dreams is to be drafted in the NBA. Sadly its unlikely this will ever occur as I'm only 5'6\" :("},
        ]

        return (
            <div className="About-page"> 
            <div className="EP-container">
                    <img className="EP-image" src={warren} />
                    <div className="EP-overlay">
                        {/* <p onClick={() => this.routeToHome()} className="text">HOME</p>
                        <p onClick={() => this.routeToExp()} className="text">TECH BACKGROUND</p>
                        <p onClick={() => this.routeToAbt()} className="text-selected">ABOUT ME</p> */}
                        <p onClick={() => this.routeToHome()} className="text"><Link name='HOME' link='/'/></p>
                        <p onClick={() => this.routeToExp()} className="text"><Link name='TECH BACKGROUND' link='/#experiences'/></p>
                        <p onClick={() => this.routeToAbt()} className="text-selected"><Link name='ABOUT' link='/#about'/></p>

                    </div>
                </div>                
            
            <div className = 'about-contents'>
                {about.map((abt, index) => (
                    <div className = {"abt-container _" + index}>
                        <div className="abt-overlay">
                        <p className="abt-desc"> {abt.desc}</p>
                    </div>
                    <img src={abt.img} className="abt-image"/>
                        
                
                    </div>
                ))}
            </div>

            </div>
        );
    }
}

export default About;