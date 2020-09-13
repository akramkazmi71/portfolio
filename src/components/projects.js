import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Project extends Component {
    render() {
        return(
            <div>
                <br /><br />
                <Grid className="project-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h4><u>Sports Management System</u></h4>
                        <p>Managing sports events conducted in a college through a portal where everyone can register themselves.</p>
                        <p><u>Technology:</u> HTML,CSS,PHP,MySQL</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Project;