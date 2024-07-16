function Button({text = 'Click Me!', color = 'blue', fontSize = 12}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button style={buttonStyle}>{text}</button>
    );
}

export function App() {
    return (
        <div>
            <Button />
            <Button text="Don't Click Me!" color="red" fontSize={12} />
            <Button text="Click Me!" color="blue" fontSize={20} />
            <Button text="Don't Click Me!" color="red" fontSize={20} />
        </div>
    )
}