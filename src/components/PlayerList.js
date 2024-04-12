import React, { useState } from 'react';

const PlayerList = () => {
    const [players, setPlayers] = useState(['Lala', 'Youma']);
    const [formIsVisible, setFormIsVisible] = useState(false);

    const [playerName, setPlayerName] = useState('');

    const handleClick = () => {
        setFormIsVisible(true);
    }

    const addPlayer = (e) => {
        e.preventDefault();
        setFormIsVisible(false);
        setPlayers([...players, playerName]);
        return false;
    }

    const deletePlayer = (player) => {
        const newList = players.filter(item => { return item !== player });
        setPlayers(newList);
    }

    return (
        <div className='player-list'>
            {players.length === 0 && <h2>Ajoutez le premier joueur !</h2>}
            {players.length > 0 && <ul>
                {players.map((player, index) => {
                    return <li key={index}>{player} <button className='remove-btn' onClick={() => deletePlayer(player)}>X</button></li>
                })}
            </ul>}
            {!formIsVisible && <button onClick={handleClick} className='btn-submit'>+</button>}
            {formIsVisible && <form className='addplayer' onSubmit={addPlayer}>
                <div className='form-group'>
                    <label htmlFor='player'>Player name</label>
                    <input type='text' name="player" onChange={(e) => setPlayerName(e.target.value)}></input>
                </div>
                <input type='submit' value="Enregistrer le joueur" />
            </form>}
        </div>
    );
};

export default PlayerList;