import React, { Component } from 'react';
import '../website.css';
import warren from '../images/warren.JPG';


class Home extends Component {
    render() {
        console.log('rendering home');


        return (
            <div className="Home">
                <div className="home_page">
                    <div className="my_info">
                        <p>HI! I'm</p>
                        <div className="name">
                            <p>WARREN WANG</p>
                        </div>
                        <p>EECS MAJOR @ BERKELEY | FULL-STACK DEVELOPER</p>
                    </div>
                    <div className="hoverable">
                        <div className="portrait">
                            <img className="warren" src={warren} />
                        </div>
                        <div className="options">
                            <p className = "options-list-item">EXPERIENCES</p>
                            <p className = "options-list-item">PROJECTS</p>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Home;
