import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import CustomChatbot from "./chatbot/CustomChatBot";

function App() {
  return (
    <div>
        <Layout className="App">
            <Header className="header-tag" title="MY PORTFOLIO">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    {/*<Link to="/projects">Projects</Link>*/}
                    <Link to="/experience">Experience</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="MY PORTFOLIO">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    {/*<Link to="/projects">Projects</Link>*/}
                    <Link to="/experience">Experience</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
        <CustomChatbot />
    </div>
    );
}

export default App;
