import React from 'react';
import RedirectButton from '../components/RedirectButton';
import boardGame from '../assets/images/board_game.png';
import caseTypes from '../assets/images/case-types.svg';
import caseQuestions from '../assets/images/case-questions.svg';
import triangleGeography from '../assets/images/triangle-geography.svg'
import triangleMusique from '../assets/images/triangle-musique.svg'
import triangleFFXIV from '../assets/images/triangle-FFXIV.svg'
import triangleWTF from '../assets/images/triangle-wtf.svg'
import boardTomberry from '../assets/images/board_tomberry.png'
import triangleLuck from '../assets/images/triangle-luck.svg'
import caseSpeciales from '../assets/images/case-specials.svg'
import triangleSpecialPositive from '../assets/images/triangle-special-positive.svg'
import triangleSpecialNegative from '../assets/images/triangle-special-negative.svg'
import downloadIcon from '../assets/images/file-arrow-down-solid.svg'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

const Rules = () => {
    return (
        <div>
            <Nav />
            <RedirectButton redirection={'home'} />
            <div className='container'>
                <div className='download-file'>
                    <img src={downloadIcon} alt="Icone de téléchargement" />
                    <p>Télécharger les règles du jeu en pdf dès maintenat</p>
                </div>
                <h1>LE JEU DU DODO DODU</h1>
                <p>inspiré très fortement du jeu de l'oie</p>
                <p>Parce que l'on peut vous engraisser pour mieux vous déplumer... mais pas que !</p>

                <div className='text-w-left-img'>
                    <img src={boardGame} alt="Jeu du dodo dodu" />
                    <div className='text-w-left-img__right'>
                        <div className='paragraph'>
                            <h2>But du jeu</h2>
                            <p>Atteindre l'arrivée le premier, en se faisant au passage un maximum de gils parce que c'est toujours mieux !</p>
                        </div>

                        <div className='paragraph'>
                            <h2>Qui commence ?</h2>
                            <p>Chacun jette un dé (<span>/dé cl</span>). Celui qui obtient le plus grand nombre commence, le deuxième est celui qui obtient le deuxième plus grand nombre ainsi de suite... Le dernier est donc celui ayant obtenu le jet de dé le plus petit.</p>
                        </div>
                    </div>
                </div>

                <h2>Déroulement des tours</h2>
                <p>En début de partie, tous les joueurs se placent devant la première case du plateau (case départ violette). Chacun leur tour, les joueurs lance un dé de 6 (commande ffxiv : /dé cl 6). Le joueur avance d'autant de case que le chiffre indiqué sur son dé. Arrivé sur sa case, une action se déclenche (question, gain, malus, chance, défi..). Deux scénarii sont possibles :</p>
                <ul>
                    <li><strong>Si le joueur réussi l'action</strong> (répond correctement, gagne le défi, récupère sa récompense), il peut relancer son dé et avancer d'autant de case qu'indique son chiffre. Au deuxième lancer du tour, seules les cases questions n'ont pas d'effet (voir la section "Les types de cases", ci-dessous). Le joueur réalise ou non l'effet de sa case selon le type de celle-ci, et le tour du joueur suivant débute. </li>
                    <li><strong>Si le joueur rate</strong> l'action ou que l'effet même de la case l'en empêche, son tour s'arrête et le tour du joueur suivant débute.</li>
                </ul>

                <div className='h2-wrapper'>
                    <h2>Les types de cases</h2>
                    <img src={caseTypes} alt="Types des cases" />
                </div>

                <div className='columns'>
                    <div className='columns__left'>
                        <div className='h2-wrapper'>
                            <h2>Les cases questions</h2>
                            <img src={caseQuestions} alt="Types des cases" />
                        </div>
                        <p>Sur le plateau de jeu, les cases questions sont de 4 couleurs différentes correspondant à 4 thèmes :</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Case bleue
                                    </td>
                                    <td>
                                        <img src={triangleGeography} alt="Triangle géographie" />
                                    </td>
                                    <td>
                                        Thème Géographie
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Case rose
                                    </td>
                                    <td>
                                        <img src={triangleMusique} alt="Triangle musique" />
                                    </td>
                                    <td>
                                        Thème Musique
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Case orange
                                    </td>
                                    <td>
                                        <img src={triangleFFXIV} alt="Triangle FFXIV" />
                                    </td>
                                    <td>
                                        Thème FFXIV
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Case violette
                                    </td>
                                    <td>
                                        <img src={triangleWTF} alt="Triangle WTF" />
                                    </td>
                                    <td>
                                        Thème WTF
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            En s'arrêtant sur une case question, une carte correspondant au thème est <strong>tirée aléatoirement au joueur</strong>. Le joueur doit essayer d'y répondre (sans tricher). <br /> Une fois posée, la question ne peut pas être reposé à un autre joueur. <br /> La réponse est affichée au dos de la carte. <strong>Certaines réponses sont libres mais doivent être cohérentes</strong> (il n'y a pas qu'une seule bonne réponse), dans ce cas la question le précise et se sont <strong>les autres joueurs qui déterminent s'ils acceptent la réponse</strong> (si celle-ci ne fait pas partie des réponses proposées sur la carte).
                        </p>
                        <p>
                            Les <span>cartes "WTF"</span> (case violette) sont différentes des autres cartes "question" car l'<strong>effet peut durer plusieurs tours</strong> et se sont <strong>les autres joueurs qui déterminent si le défi est réussi ou non</strong>. Si le défi est réussi le joueur relance le dé (deuxième jet dans le tour) et avance d'autant de case qu'indiqué sur le dé (cf : déroulement des tours). <br /> Si l'effet de la carte WTF dure plusieurs tours, le <strong>joueur doit tenir le nombre de tours indiqués</strong> (exemple : sur deux tours, le joueur doit tenir jusqu'à la fin de son deuxième tour, après avoir relancé les dés). Le joueur cumulera donc au tour suivant l'effet de la carte, plus la nouvelle action demandée. En cas de défaite ou abandon, le joueur passe le tour qu'il était censé jouer.
                        </p>
                        <img src={boardTomberry} alt="Jeu du dodo dodu avec un Tomberry" />
                    </div>
                    <div className='columns__right'>
                        <div className='h2-wrapper'>
                            <h2>Les cases chances</h2>
                            <img src={triangleLuck} alt="Triangle chance" />
                        </div>
                        <p>
                            Les cases chances sont de couleur verte. Lorsqu'un joueur s'arrête sur une de ces cases, une carte chance lui est <strong>tirée aléatoirement</strong>. Son <strong>effet peut être aussi bien positif que négatif</strong>. Si la carte ne l'en empêche pas, le joueur relance à nouveau le dé et avance jusqu'à sa prochaine destination.
                        </p>

                        <div className='h2-wrapper'>
                            <h2>Les cases spéciales</h2>
                            <img src={caseSpeciales} alt="Triangle chance" />
                        </div>
                        <p>
                            Sur le plateau il existe plusieurs cases spéciales : des jaunes et des noires. <br /> Les jaunes ont des effets positifs pour le joueur tandis que les noires ont des effets négatifs.
                        </p>

                        <div className='h2-wrapper'>
                            <h2>Les cases jaunes</h2>
                            <img src={triangleSpecialPositive} alt="Triangle spécial positif" />
                        </div>
                        <p>Il en existe 3 types :</p>
                        <ul>
                            <li>Les <strong>cases mascotte</strong>, surmontée d'une peluche alpha : En s'arrêtant dessus, le joueur gagne une mascotte aléatoire parmi celles sélectionnées préalablement (par l'organisateur du jeu).</li>
                            <li>Les <strong>cases tirelire</strong>, surmontée d'une pochette d'or : En s'arrêtant dessus, le joueur remporte 10 000 gils.</li>
                            <li>La <strong>case pactole</strong>, surmontée d'un coffre au trésors : En s'arrêtant dessus, le joueur remporte 1 000 000 gils (1 seul joueur l'emporte par partie). </li>
                        </ul>
                        <p>L'effet d'une case jaune n'est valable qu'une seule fois par joueur. <br /> Par contre un joueur peut avec de la chance s'arrêter sur deux cases mascottes différentes, et remporter deux mascottes.</p>

                        <div className='h2-wrapper'>
                            <h2>Les cases noires</h2>
                            <img src={triangleSpecialNegative} alt="Triangle spécial négatif" />
                        </div>
                        <p>Il en existe 4 sur le plateau :</p>
                        <ul>
                            <li>La <strong>case "Une petite coupe ?"</strong>, surmontée de la sonnette d'esthéticien : En s'arrêtant dessus, le joueur doit <strong>changer sa coupe et sa couleur de cheveux</strong>. Celles-ci sont <strong>déterminées par les autres joueurs à la majorité</strong> (durée du gage à déterminer). Si le joueur ne souhaite pas relevé le défi, il passe son tour. Sinon il s'engage à le réaliser et relance le dé (deuxième jet de son tour).</li>
                            <li>La <strong>case prisonnier de la douceur</strong>, surmontée d'un coussin sombrelinçois : En s'arrêtant dessus, le joueur happé par la douceur et le moelleux du coussin s'assoit, <strong>passe son tour et se repose pendant un tour supplémentaire</strong>. Il peut se faire délivrer de ce piège si un joueur s'arrête sur la case ou grâce à une carte (mal)chance d'un autre joueur. Il pourra rejouer normalement au moment de son tour.</li>
                            <li>La <strong>case taxe</strong>, accolée au coffre de cl : En s'arrêtant dessus, le joueur paie une taxe de 1000 gils au meneur.</li>
                            <li>La <strong>case Tomberry</strong>, devancez le vite avant qu'il ne vous rattrape. En s'arrêtant dessus, le joueur doit relancer le dé et obtenir un <strong>chiffre strictement supérieur à 3</strong>. S'il réussit il avance d'autant de case qu'indiqué par son dé. Si le joueur obtient un chiffre inférieur ou égal à 3, il se voit dans l'obligation de reculer de 3 cases (sur la case taxe, dont l'effet s'applique), afin de semer l'assassin tomberry. </li>
                        </ul>

                        <p><strong>L'effet d'une case noire n'est pas limité et peut s'appliquer plusieurs fois à un même joueur au cours de la partie.</strong></p>
                    </div>
                    <h2>Comment gagner ?</h2>
                    <p>Il faut <strong>arriver pile sur la case centrale arrivée</strong> (case avec la pile de cadeaux). <strong>Si le joueur réalise un score au dé supérieur au nombre de case le séparant de la victoire alors il doit reculer d'autant de cases supplémentaires.</strong> Ex : à 4 cases de l'arrivée, le joueur doit faire 4 au dé pour gagner. Si le joueur fait 6, il avancera de 4 cases (arrivée) puis reculera de 2 cases (déplacement de 6 cases). Le joueur aura donc avancé de deux cases au total. Il devra ensuite faire 2 pour gagner !</p>
                </div>

                <p>Il ne nous reste plus qu'à vous souhaiter bon courage et surtout bonne chance !</p>
            </div>
            <RedirectButton redirection={'top'} />
            <RedirectButton text="Retournez à l'accueil" redirection={'home'} />
            <Footer customClass='light' />
        </div>
    );
};

export default Rules;