<script>
    export var colors;
    let color = colors[0];

    $: _handleClick = ev => {
        ev.preventDefault();
        let i = Math.floor(Math.random()* colors.length);
        color = colors[i];
    };
</script>

<button style="--color: {color}" on:click={_handleClick} >Click to change colors</button>

<style>
    button {
        color: black;
        background-color: var(--color);
    }
</style>