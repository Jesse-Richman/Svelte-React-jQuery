<script>
    export var items;
    let itemToAdd = "";
    let i = 0;

    $: selected = items[i];

    const addItem = () => {
        if (itemToAdd === "")
            return;

        items = items.concat(itemToAdd);
        i = items.length - 1;
    };

    const removeItem = () => {
        const index = items.indexOf(selected);
        items = [...items.slice(0, index), ...items.slice(index+1)];

        i = Math.min(i, items.length - 2)
    }
</script>

<div class="container">
    <div class="controls">
        <input type="text" bind:value={itemToAdd}>
        <button on:click={addItem} >Add</button>
        <button on:click={removeItem}>Remove</button>
    </div>

    <div class="list">
        <select bind:value={i} size={5}>
            {#each items as item, i}
                <option value={i}>{item}</option>
            {/each}
        </select>
    </div>
</div>

<style>
    div {
        padding: 4px;
    }

    div.container {
        width: 30%;
        background-color: lightgray;
    }
    
    div.list select {
        width: 100%;
    }
</style>