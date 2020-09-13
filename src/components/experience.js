import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <div>
                <br /><br />
                <Grid className="experience-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h3><u><a href="https://www.niki.ai" target="_blank" rel="noopener noreferrer">Niki.ai</a></u></h3>
                        <h5><u>Associate Software Engineer</u></h5>
                        <p>Developed and implemented a giftcard inventory system.</p>
                        <p>Developed and implemented a UpariKamai system.</p>
                        <p>Writing unit tests.</p>
                        <p>Handling data in the SQL tables.</p>
                        <p>Handled frontend changes for the website.</p>
                    </Cell>
                </Grid>
                <br />
                <Grid className="experience-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h3><u><a href="https://www.niki.ai" target="_blank" rel="noopener noreferrer">Niki.ai</a></u></h3>
                        <h5><u>Tech Intern</u></h5>
                        <p>Developed and implemented a giftcard inventory system.</p>
                        <p>Developed and implemented a UpariKamai system.</p>
                        <p>Handling data in the SQL tables.</p>
                        <p>Handled frontend changes for the website.</p>
                    </Cell>
                </Grid>
                <br />
                <Grid className="experience-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={6}>
                        <h5><u>Programming Languages</u></h5>
                        <p>Python   - <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" /> <i class="fa fa-star" /></p>
                        <p>Java     - <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" /> <i class="fa fa-star" /></p>
                        <p>C++      - <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" /></p>
                        <p>C        - <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" /></p>    
                    </Cell>
                    <Cell col={6}>
                        <h5><u>Scripting Languages</u></h5>
                        <p>HTML     - <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" /> <i class="fa fa-star" /></p>
                        <p>CSS      - <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" style={{color: 'yellow'}} /> <i class="fa fa-star" /> <i class="fa fa-star" /></p>
                    </Cell>
                </Grid>
                <br/>
            </div>
        );
    }
}

export default Experience;