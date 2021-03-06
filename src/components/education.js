import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class Education extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p style={{fontFamily: 'Oxygen'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px', fontFamily:'Oxygen'}}>{this.props.schoolName}</h4>
                    <p style={{fontFamily: 'Oxygen'}}>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;