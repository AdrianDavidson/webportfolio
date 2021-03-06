import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import Blog from './blog';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
    </Switch>
)
export default Main;