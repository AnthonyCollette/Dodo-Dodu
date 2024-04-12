import { useState } from 'react';
import Nav from '../components/Nav';
import Theme from '../components/Theme';

const Questions = () => {

    const question = { question: 'Qui est le personnage le plus appréciable de FFXIV?', answer: 'Alphinaud' }

    const themes = [{ theme: 'geography', text: 'Géographie' }, { theme: 'music', text: 'Musique' }, { theme: 'ffxiv', text: 'FFXIV' }, { theme: 'wtf', text: 'WTF' }]

    const [questionIsVisible, setQuestionIsVisible] = useState(false)

    const handleThemeChoice = (theme) => {
        setQuestionIsVisible(true)
    }

    return (
        <div className='questions'>
            <Nav />
            {!questionIsVisible && <div className='themes'>
                {themes?.map((theme, index) => {
                    return <Theme key={index} theme={theme.theme} text={theme.text} onClick={() => handleThemeChoice(theme.theme)} />
                })}
            </div>}
            {questionIsVisible && <div className='question'>
                <h2>{question.question}</h2>
                <h2>{question.answer}</h2>
            </div>}
        </div>
    );
};

export default Questions;