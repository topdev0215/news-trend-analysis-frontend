// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './pages/layout';
import Topic from './pages/topic';
import Articles from './pages/articles';
import Graph from './pages/graph';
import Article from './pages/article'

import { AlertProvider } from './components/alertContext';

import './App.css'

const App = () => {
    return (
        <Router>
            <AlertProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="topics/:id" element={<Topic />} />
                        <Route path="topics/:id/graph" element={<Graph />} />
                        <Route path="topics/:id/articles/:month" element={<Articles />} />
                        <Route path="topics/:id/articles/:month/:article_id" element={<Article />} />
                    </Route>
                </Routes>
            </AlertProvider>
        </Router>
    );
};

export default App;