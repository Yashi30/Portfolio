 import React from 'react';
import './App.css';
import{Layout , Header , Navigation  , Content} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div >
    <Layout  fixedHeader>
        <Header className="header" title={<span><span style={{ color: '#ddd' }}></span><strong><a href="http://localhost:3000/">MY PORTFOLIO</a></strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        
        <Content>
            <div className="page-content">
            <Main/>
            </div>
        </Content>
    </Layout>
</div>
    )
}

export default App;
