const Theme = ({theme, text}) => {
    return (
        <div className={`category ${theme}`} data-theme={theme}>
            <div className="overlay"></div>
            <h2>{text}</h2>
        </div>
    );
};

export default Theme;