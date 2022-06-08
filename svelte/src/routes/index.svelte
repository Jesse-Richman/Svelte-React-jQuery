<script>
    import ColorBtn from "../components/ColorBtn.svelte";
    import ListControl from "../components/ListControl.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ColorBtn colors={['red', 'green', 'blue', 'yellow']} />

<ListControl items={['write code', 'think', 'fix code you wrote']}/>