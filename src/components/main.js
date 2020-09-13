import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Experience from './experience';
import Project from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Project} />
    </Switch>
)

export default Main;