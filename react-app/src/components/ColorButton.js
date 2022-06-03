import {useState} from 'react';

export default function ColorButton({colors}) {
    const [color, setColor] = useState('#000000');

    const styles = {
        backgroundColor: color,
        color: '#ffffff'
    };

    let handleClick = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    };

    return (
        <button style={styles} onClick={handleClick}>
            Click to change color
        </button>
    );
}