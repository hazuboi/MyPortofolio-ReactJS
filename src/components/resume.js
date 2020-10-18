import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={process.env.PUBLIC_URL + '/img/HaznanR.jpg'}
                                alt="avatar"
                                style={{height: '250px'}}                            
                            />
                        </div>
                        <h2 style={{paddingTop: '1em' ,textAlign:'center', fontFamily: 'Anton'}}>Haznan Muhammad Ramadhan</h2>
                        <h4 style={{color:'black', fontFamily: 'Oxygen', fontWeight:'bold'}}>Junior Web Developer</h4>
                        <hr style={{borderTop: '3px solid $833fb2', width:'50%', fontFamily: 'Oxygen'}}/>
                        <p style={{fontFamily: 'Oxygen'}}>
                            I'am a junior web developer seeking a full-time position in front-end web developer, where I can apply my knowledge and skills for continuous improvement. And also I believe that, working in different environment will be a great experience for me :D
                        </p>
                        <hr style={{borderTop: '3px solid $833fb2', width:'50%'}}/>
                        <h5 style={{fontFamily: 'Oxygen', fontWeight:'bold'}}>Address</h5>
                        <p style={{fontFamily: 'Oxygen'}}>Jl. Boulevard Taman Cikas B7 No. 16, Pekayon Jaya, Bekasi Selatan, 17148</p>
                        <h5 style={{fontFamily: 'Oxygen', fontWeight:'bold'}}>Phone</h5>
                        <p style={{fontFamily: 'Oxygen'}}>(+62) 895-2687-1375</p>
                        <h5 style={{fontFamily: 'Oxygen', fontWeight:'bold'}}>Email</h5>
                        <p style={{fontFamily: 'Oxygen'}}>haznan.ramadhan@gmail.com</p>
                        <h5 style={{fontFamily: 'Oxygen', fontWeight:'bold'}}>LinkedIn</h5>
                        <p style={{fontFamily: 'Oxygen'}}>www.linkedin.com/in/haznanr</p>
                        <hr style={{borderTop: '3px solid $833fb2', width:'50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{fontFamily: 'Oxygen'}}>Education</h2>

                        <Education 
                            startYear={2015}
                            endYear={2020}
                            schoolName="Gunadarma University"
                            schoolDescription="Bachelor degree in Information System"
                        
                        />
                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="Public High School 30 Jakarta"
                            schoolDescription="Social Studies Major"
                        
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2 style={{fontFamily: 'Oxygen'}}>Experience</h2>

                        <Experience 
                            startYear="November 2018"
                            endYear="January 2019"
                            jobName="Staff Intern HCIS Management Departemen PT. Telekomunikasi Seluler"
                            jobDescription="Develop Web Apps using PHP and Yii2 Framework for internal employee"

                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />

                        <h2 style={{fontFamily: 'Oxygen'}}>Skills</h2>

                        <Skills 
                            skill="Javascript  "
                            progress={70}
                        />
                        <Skills 
                            skill="HTML/CSS    "
                            progress={80}
                        />
                        <Skills 
                            skill="PHP         "
                            progress={80}
                        />
                        <Skills 
                            skill="CodeIgniter "
                            progress={80}
                        />
                        <Skills 
                            skill="ReactJS     "
                            progress={80}
                        />
                        <Skills 
                            skill="React Native"
                            progress={70}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;