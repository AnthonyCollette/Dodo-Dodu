import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RedirectButton from '../components/RedirectButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, incrementRound, removePlayer } from '../store/store';

const Game = () => {

    const dispatch = useDispatch()

    const checkAuth = useSelector((state) => state?.user?.isAuthenticated)
    const players = useSelector((state) => state?.players?.players)

    const [canGame, setCanGame] = useState(false);
    const [addingNewPlayer, setAddingNewPlayer] = useState(false);
    const [gameIsLaunch, setGameIsLaunch] = useState(false);

    const setPlayer = (e) => {
        e.preventDefault();
        dispatch(addPlayer(e.target.name.value))
        e.target.name.value = ''
    }

    const handleDeletePlayer = (id) => {
        dispatch(removePlayer(id))
    }

    const endRound = (id) => {
        dispatch(incrementRound(id))
    }

    useEffect(() => {
        if (checkAuth) {
            setCanGame(true)
        }
    }, [checkAuth])

    return (
        <div>
            <Nav />
            <div className='container'>
                <RedirectButton redirection="home" />
                {!canGame && <div className='columns'>
                    <div className='column__left'>
                        <p>/!\ Lancer une partie en tant qu'invité ne permet pas de la sauvegarder dans son historique de partie !</p>
                        <button onClick={() => setCanGame(true)}>
                            Partie rapide invité
                        </button>
                    </div>
                    <div className='column__right'>
                        <Link to="/login">
                            Se connecter
                        </Link>
                    </div>
                </div>}

                {canGame && !gameIsLaunch && <div>
                    <h1>Sélection des joueurs</h1>
                    <div className='name-board'>
                        <button onClick={() => setAddingNewPlayer(true)}>+</button>
                        <div className='name-board__names'>
                            <ul>
                                {players.map((player, index) => { return <li key={index}>{player.name} <button onClick={() => handleDeletePlayer(player.id)}>-</button></li> })}
                                {addingNewPlayer && <form onSubmit={setPlayer} onBlur={() => setAddingNewPlayer(false)}><input type="text" name="name"></input></form>}
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => setGameIsLaunch(true)}>Début de la partie</button>
                </div>}

                {canGame && gameIsLaunch && <div>
                    <ul>
                        {players?.map((player, index) => {
                            return <li key={index}>
                                <p>{player.name} T{player.round}</p>
                                <div><img src='' alt="icone mascotte" /></div>
                                <div><img src='' alt="icone mascotte" /></div>
                                <div><img src='' alt="icone tirelire" /></div>
                                <div><img src='' alt="icone tirelire" /></div>
                                <div><img src='' alt="icone pactole" /></div>
                                <div><img src='' alt="icone gage" /></div>
                                <div>
                                    <div className=''>
                                        <img src='' alt="icone de compteur" />
                                        <button>1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                </div>
                                <button onClick={() => endRound(player.id)}>FIN DE TOUR</button>
                            </li>
                        })}
                    </ul>
                    <button onClick={() => console.log(players)}>TEST</button>
                </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Game;