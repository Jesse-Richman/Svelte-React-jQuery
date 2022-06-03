import $ from 'jquery';

class ColorButton {
    constructor(root, colors) {
        this.root = root;
        this.colors = colors;
        this.btn = $('<button>').text('Click to change color')
            .on('click', ev => this._handleClick(ev));
        this.root.append(this.btn);
    }
    _handleClick(ev) {
        ev.preventDefault();
        let i = Math.floor(Math.random() * this.colors.length);
        let color = this.colors[i];
        this.btn.css('background-color', color);
    }
}

export default ColorButton;
