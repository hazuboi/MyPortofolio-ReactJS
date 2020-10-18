import React, { Component } from 'react';
import { Cell, Grid, Tab, Tabs, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0 ){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '7650', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/12/posts/13994/preview_image/codeIgniter.jpg) center / cover'}}>
                            CodeIgniter Project #1
                        </CardTitle>
                        <CardText>A company profile web based using PHP, MySql, CodeIgniter Framework, and Bootstrap Framework</CardText>
                        <CardActions border>                            
                            <Button colored><a href="http://www.madaelconsult.com" target="_blank" rel="noreferrer noopener">See my project</a></Button>                            
                        </CardActions>
                        <CardMenu style={{color : '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>   
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>This is React</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab>CodeIgniter</Tab>
                </Tabs>
                
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>                    
                
            </div>
        )
    }
}

export default Projects;