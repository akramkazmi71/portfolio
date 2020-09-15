import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div className="App">
                <img className="home-img" src={window.location.origin + '/my_pic.png'} alt="Md Akram Kazmi"/>
                <Grid className="home-content" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}>
                        <h2>Hi, I am Akram
                        <span id="wave">
              <img
                alt="👋"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
                style={{
                  height: "1em",
                  width: "1em",
                  margin: "0px 0.05em 0px 0.1em",
                  "vertical-align": "-0.1em",
                }}
              />
            </span></h2>
                        <hr />
                        <p>| Software Developer |</p>
                        <div className="social-links" >
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

export default Landing;