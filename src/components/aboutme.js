import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div>
                <br /><br />
                <Grid className="about-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h4>My Name is Md Akram Kazmi</h4>
                        <p>I am currently working in Niki.ai as an Associate Software Engineer.</p>
                        <p>I have completed my Bachelor's degree from Sapthagiri College of Engineering, Bangalore.</p>
                        <p>Information Science Graduate looking to obtain the position as a Software developer. I have experience working as part of a team and individually and use a creative approach to solve problem.</p>
                    </Cell>
                </Grid>
                <br/>
                <Grid className="about-content" style={{width: '80%', mergin: 'auto'}}>
                    <Cell col={12}>
                        <h4><u>Hobbies</u></h4>
                        <p>I love playing outdoor sports.</p>
                    </Cell>
                </Grid>
                <br/>
                <Grid className="about-content" style={{width: '80%', mergin: 'auto'}}>
                    <Cell col={12}>
                        <h4><u>Achievements</u></h4>
                        <p>Secured 1st position in Regional Level Basketball tournament.</p>
                        <p>Secure 1st position in Debug the C bug in a intra college event.</p>
                        <p></p>
                    </Cell>
                </Grid>
                <br/>
                <Grid className="about-content" style={{width: '80%', mergin: 'auto'}}>
                    <Cell col={12}>
                        <h4><u>Resume</u></h4>
                        <p>You can view or download my resume from <a href="https://docs.google.com/document/d/1E5rjIU6EZllDs0fsjHNmgbvHUWdfP41fI1pjSwViaGc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </Cell>
                </Grid>
                <br/><br/>
            </div>
        );
    }
}

export default About;