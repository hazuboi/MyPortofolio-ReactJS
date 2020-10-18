import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={process.env.PUBLIC_URL + '/img/HaznanR.jpg'}
                            alt="avatar"                                                  
                        />

                        <div className="banner-text">
                            <h1>Junior Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | PHP | JavaScript | ReactJS | CodeIgniter | Bootstrap | ReactNative</p>
                        
                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="http.google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http.google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="http.google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* Twitter */}
                                <a href="http.google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>    
        )
    }
}

export default Landing;