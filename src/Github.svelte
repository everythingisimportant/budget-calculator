<script>
    import {onMount} from "svelte";
    async function getUsers(){
        let userData = await fetch("https://api.github.com/users");
        return await userData.json();
    }
</script>

<style>
    h2 {
        text-align:center;
    }
</style>

{#await getUsers()}
    <!-- promise is pending -->
    <h2>Loading...</h2>
{:then users}
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
{:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
{/await}
        