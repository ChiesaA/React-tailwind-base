import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import AuthButton from './components/AuthButtons';
import Header from './components/Header';
import Trending from './components/Trending';

function App() {
    return (
        <div className="grid md:grid-cols-5">
            <Nav />
            <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
                <AuthButton />
                <Header />
                <Trending />
            </main>
        </div>
    );
}

export default App;
