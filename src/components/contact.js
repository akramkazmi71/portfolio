import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div>
                <br /><br />
                <Grid className="contact-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h4><u>You can contact me by</u></h4>
                        <p><i class="fa fa-phone"></i> : +91-9730563447</p>
                        <p><i class="fa fa-envelope"></i> : <a href = "mailto: abc@example.com">akramkazmi71@gmail.com</a></p>
                    </Cell>
                </Grid>
                <br />
                <Grid className="contact-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h4><u>Or visit my profiles</u></h4>
                        <div className="social-links-contact" >
                            {/*LinkedIn*/}
                            <a href="https://www.linkedin.com/in/akramkazmi71/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin-square"></i>
                            </a>
                            {/*GitHub*/}
                            <a href="https://github.com/akramkazmi71" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github-square"></i>
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;