import React, { Component } from 'react';
import '../website.css';
import CodeBase from '../images/codebase_icon.png';
import Ginger from '../images/ginger_icon1.png';
import warren from '../images/warren.JPG';
import CalHacks from '../images/calhacks_icon.png';
import BogoSort from '../images/bogosort.png';
import Swapi from '../images/swapi.png';
import GingerProj from '../images/ginger_icon.png';

class Experiences extends Component {

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
        var experiences = [
            { date: "January 2019 - Current", role: 'Software Developer', img: CodeBase, desc: "I’m part of a student organization at UC Berkeley called CodeBase. Ever semester, we partner with 4 different bay-area tech companies and build cool projects for them. Check out some of the projects we’ve completed in the past!" },
            { date: "June 2019 - August 2019", role: 'Software Engineer Intern', img: Ginger, desc: "Over the summer after my freshman year, I worked as a software engineering intern at Ginger. Ginger is a growing tech startup using artificial intellegience to better provide mental healthcare to over 400,000 people across the world." }
        ];
        var projects = [
            {link: 'https://github.com/codebase-berkeley/judging-portal', title: "Hackathon Judging Portal", tech: 'React.js, Node.js, Express, PostgreSQL', desc: 'In a team of 6, built a full-stack web app to serve as a judging portal for hackathons. Product will be implemented at Cal Hacks 6.0 this winter, saving organizers and judges dozens of hours of manual work every year', img: CalHacks},
            {link: 'https://github.com/Warrenwwang1/p5', title: "BogoSort", tech: 'React.js, p5.js', desc: 'Utilized the p5.js library to build a fun web application that teaches bogosort. Used by AP Computer Science teachers at Piedmont HS to inspire students to build something creative with code', img: BogoSort},
            {link: 'https://github.com/Warrenwwang1/sw_api', title: "Star Wars Doppelganger", tech: 'React.js, Star Wars API', desc: 'Used React.js and the Star Wars API to build a web app that finds a user’s doppelganger in the Star Wars universe', img: Swapi},
            {title: "Smart Replies", tech:'TypeScript.js, React.js, Django', desc: "During my summer internship, I built a new full-stack feature into Ginger's coach portal that gave their coaches access to commands and keyboard shortcuts. My feature was immediately implemented and cut down coach response times by 20-30%, resulting in better efficiency and ability for the company to scale.", img: GingerProj},
        ]

        return (
            <div className='tech-page'>
            <div className="Experiences">
                <div className="EP-container">
                    <img className="EP-image" src={warren} />
                    <div className="EP-overlay">
                        <p onClick={() => this.routeToHome()} className="text">HOME</p>
                        <p onClick={() => this.routeToExp()} className="text-selected">TECH BACKGROUND</p>
                        <p onClick={() => this.routeToAbt()} className="text">ABOUT ME</p>



                       
                    </div>

                 
                </div>
                <div className="exp-content">
                <div className="exp_ header">
                    EXPERIENCES
                </div>
                    <div className="exp-divs">
                        {experiences.map((exp) => (
                            <div className="exp">
                                <div className ='img-container'>
                                    <img src={exp.img} className="exp-img" />
                                </div>
                                <div className='exp-descriptions'> 
                                    <p className="exp-date">{exp.date} </p>
                                    <p className="exp-role">{exp.role} </p>

                                    <p className="exp-desc">{exp.desc} </p>
                                </div>
                            </div>
                    )
                    )}
                    </div>
                   
                </div>
            </div>

            <div className='Projects'>
                {/* <div className='proj-background'/> */}
                <p className="header white">
                    PROJECTS
                </p>
                <p className ='subtitle white'> hover for description; click for the repo!</p>

                <div className='proj-divs'>
                {projects.map((proj) => (
                            <div className="proj">
                                <p className="proj-title">{proj.title} </p>
                                <div className ='proj-container'>
                                    <img src={proj.img} className="proj-img"/>
                                    <a href={proj.link} className="proj-tech">
                                        <p>{proj.tech}</p>
                                    </a>
                                <div className='proj-overlay'>
                                    <p className="proj-desc">{proj.desc} </p>
                                </div>
                            </div>
                            </div>

                    )
                    )}

                </div>

            </div>
            </div>
        );
    }
}

export default Experiences;
