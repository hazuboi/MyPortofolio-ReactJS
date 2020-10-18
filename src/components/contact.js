import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Haznan Muhammad Ramadhan</h2>
                        <img 
                            style={{height: '250px'}}
                            src={process.env.PUBLIC_URL + '/img/HaznanR.jpg'}
                            alt="avatar"
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                        I'am a junior web developer seeking a full-time position in front-end web developer, where I can apply my knowledge and skills for continuous improvement. And also I believe that, working in different environment will be a great experience for me :D
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+62) 895-2687-1375
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        haznan.ramadhan@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        www.linkedin.com/in/haznanr
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;