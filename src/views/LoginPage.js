import React from 'react';
import Login from '../components/auth/login/Login';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div>
            <Nav />
            <Login />
            <Footer />
        </div>
    );
};

export default LoginPage;