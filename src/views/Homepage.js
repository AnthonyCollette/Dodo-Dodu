import React from 'react';
import Nav from '../components/Nav';
import PlayerList from '../components/PlayerList';
import gif from '../assets/images/gif.gif';
import axios from 'axios';

const Homepage = () => {

    

    const callAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()).then((data) => console.log(data))
    }

    return (
        <div>
            <img src="https://picsum.photos/500/500" />
            <button onClick={callAPI}>Call API</button>
            {/* <div className='background-gif'>
                <img src={gif} alt="Keep dreaming" />
            </div>
            <Nav />
            <PlayerList /> */}
        </div>
    );
};

export default Homepage;