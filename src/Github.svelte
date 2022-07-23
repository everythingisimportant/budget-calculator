<script>
    import {onMount} from "svelte";
    let users = [];
    let loading = true;
    onMount(async () => {
        let userData = await fetch("https://api.github.com/users");
        users = await userData.json();
        loading = false;
    })
</script>

<style>
    h2 {
        text-align:center;
    }
</style>

{#if loading}
    <h2>Loading...</h2>
{:else}
    <h2>Github Users</h2>
    <section>
        {#each users as user}
        <article class="user">
            <img src={user.avatar_url} alt="Github user">
            <div class="user-info">
                <h3>User: {user.login}</h3>
                <a href={user.html_url} class="btn-primary" target="_blank">visit profile</a>
            </div>
        </article>
        {/each}
    </section>
{/if}

