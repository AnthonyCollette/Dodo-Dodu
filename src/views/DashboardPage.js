import React from 'react';
import Dashboard from '../components/Dashboard';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const DashboardPage = () => {
    return (
        <div>
            <Nav />
            <Dashboard />
            <Footer />
        </div>
    );
};

export default DashboardPage;