<script>
    export let showForm;
    import {_} from "./i18n.js";
</script>

<nav class="nav">
    <div class="nav-center">
        <h1 class="nav-title">{$_("app.title")}</h1>
        <button type="button" class="nav-btn" on:click={showForm}>
            <i class="far fa-plus-square">add item</i>
        </button>
    </div>
</nav>
