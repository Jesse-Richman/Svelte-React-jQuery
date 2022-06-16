<script>
    import ColorBtn from "../components/ColorBtn.svelte";
    import ListControl from "../components/ListControl.svelte";
</script>

<div class="app">
    <ColorBtn colors={['red', 'green', 'blue', 'yellow']} />
    <ListControl items={['write code', 'think', 'fix code you wrote']}/>
</div>

<style>
    .app {
        margin: 15px;
    }
</style>