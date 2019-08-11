import React, { Component } from 'react';
import '../website.css';
import warren from '../images/warren.JPG';
import giticon from '../images/giticon.png';
import resume from '../images/resume.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';


class Home extends Component {
    constructor(props) {
        super(props);
        this.routeToExp = this.routeToExp.bind(this);
      }
    
    routeToExp() {
        const path = '/experiences';
        this.props.history.push(path);
    }

    routeToAbt() {
        const path = '/about';
        this.props.history.push(path);
    }

    routeToHome() {
        return;
    }

    render() {
        return (
            <div className="Home">
                <div className="home_page">
                    <div className="my_info">
                        <p>HI! I'm</p>
                        <div className="name">
                            <p>WARREN WANG</p>
                        </div>
                        <p>EECS MAJOR @ UC BERKELEY | FULL-STACK DEVELOPER</p>

                        <a href="https://github.com/warrenwwang1">
                            <img src={giticon} className="icon" />
                        </a>
                        <a href="https://www.dropbox.com/s/k65rm3ysbgwgij6/Warren%20Wang%20Resume.docx?dl=0">
                            <img src={resume} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/warrenwwang">
                            <img src={linkedin} className="icon" />
                        </a>
                        <a href="mailto:warrenwwang@berkeley.edu">
                        <img src={email} className="icon" />
                        </a> 


                    </div>
                    <div className="container">
                            <img className="image" src={warren} />
                        <div className="overlay">
                            <p onClick={()=>this.routeToHome()} className = "text-selected">HOME</p>
                            <p onClick={()=>this.routeToExp()} className = "text">TECH BACKGROUND</p>
                            <p onClick={()=>this.routeToAbt()} className = "text">ABOUT ME</p>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Home;
