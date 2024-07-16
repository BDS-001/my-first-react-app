function Button({text = 'Click Me!', color = 'blue', fontSize = 12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button onClick={() => handleClick('https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components')} style={buttonStyle}>{text}</button>
    );
}

export function App() {
    const handleButtonClick = (url) => {
        window.location.href = url
    }

    return (
        <div>
            <Button />
            <Button text="Don't Click Me!" color="red" fontSize={12} handleClick={handleButtonClick}/>
            <Button text="Click Me!" color="blue" fontSize={20} />
            <Button text="Don't Click Me!" color="red" fontSize={20} />
        </div>
    )
}