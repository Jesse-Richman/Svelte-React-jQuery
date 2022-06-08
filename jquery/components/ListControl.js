import $ from 'jquery';
import './ListControl.css';

class ListControl {
    constructor(root, items) {
        this.root = root;
        this.items = items;
        this.itemToAdd = '';
        this.i = 0;
        this.$input = $('<input>');
        this.$select = $('<select>').prop('size', 5);
        this.buildUI();
    }

    buildUI() {
        let container = $('<div>').prop('class', 'container');
        let controls = $('<div>').prop('class', 'controls');
        let $addBtn = $('<button>').text('Add').on('click', () => this.addItem());
        let $removeBtn = $('<button>').text('Remove').on('click', () => this.removeItem());
        controls.append(this.$input, $addBtn, $removeBtn);
        
        let list = $('<div>').prop('class', 'list');
        this.updateListItems();
        list.append(this.$select);

        container.append(controls, list);
        this.root.append(container);
    }

    addItem() {
        let itemToAdd = this.$input.val();
        if (itemToAdd === "")
            return;

        this.items = this.items.concat(itemToAdd);
        this.updateListItems();
        this.$select.prop('selectedIndex', this.items.length - 1);
    };

    removeItem() {
        const index = this.$select.prop('selectedIndex');
        this.items.splice(index, 1);

        this.updateListItems();
        this.$select.prop('selectedIndex',(Math.min(index, this.items.length - 1)));
    }

    updateListItems() {
        let listItems = this.items.map(function(item){
            return $('<option>').prop('value', item).text(item);
        });
        this.$select.empty().append(listItems);
    }
}

export default ListControl;