function Button({text = 'Click Me!', color = 'blue', fontSize = 12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        //when using arguments to function you must use aon function instead of just the function
        // onClick={handleClick('https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components'))
        // above will call the function right away instead of only when the button is clicked
         
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