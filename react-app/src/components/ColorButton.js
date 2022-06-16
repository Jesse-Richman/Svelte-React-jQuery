import {useState} from 'react';

export default function ColorButton({colors}) {
    const [color, setColor] = useState(colors[0]);

    const styles = {
        backgroundColor: color,
        color: '#ffffff'
    };

    let handleClick = () => {
        let i = Math.floor(Math.random() * colors.length);
        setColor(colors[i]);
    };

    return (
        <button style={styles} onClick={handleClick}>
            Click to change color
        </button>
    );
}
