import React from 'react';
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import { fetchAPI } from '../store/store';
import { getAuth } from 'firebase/auth';

const Homepage = () => {

    const posts = useSelector((state) => state.questions.posts)
    
    const testUser = () => {
        const user = getAuth().currentUser;
        console.log(user)
    }

    return (
        <div className='homepage'>
            <Nav />
            <div className='titles-wrapper'>
                <h2>Règles du jeu</h2>
                <h2>Nouvelle partie</h2>
            </div>

            {posts?.map((post, index) => {
                return <p key={index}>{post}</p>
            })}

            <button onClick={fetchAPI}>Test</button>

            <button onClick={testUser}>TEST USER</button>

        </div>
    );
};

export default Homepage;