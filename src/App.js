import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Adrian Davidson Web" scroll>
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/blog">My Blog</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Adrian Davidson">
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/blog">My Blog</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;

// https://www.youtube.com/watch?v=9AboneIxeM8&list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm
