function Button({text = 'Click Me!', color = 'blue', fontSize = 12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );
}

export function App() {
    const handleButtonClick = () => {
        window.location.href = 'https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components'
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