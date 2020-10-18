import React, {Component} from 'react';
import { Cell, Grid, ProgressBar } from 'react-mdl';

class Skills extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{display: 'flex', fontFamily:'Oxygen'}}>
                        <p style={{fontFamily:'Oxygen'}}>{this.props.skill}</p>
                        </div>
                </Cell>
                <Cell col={8}>
                    <div style={{display:'flex'}}>
                    <ProgressBar style={{margin:'auto', width: '100%'}} progress={this.props.progress} />
                    </div>
                </Cell>                
            </Grid>
        )
    }
}

export default Skills;