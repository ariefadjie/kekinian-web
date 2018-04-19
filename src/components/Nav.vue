<template>
    <div class="navbar-end">
        <router-link to="/" class="navbar-item" exact>Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
        <span class="navbar-item">
            <a class="button is-success is-inverted">
            <span class="icon">
                <i class="fa fa-map-marker"></i>
            </span>
            <span> Maps</span>
            </a>
        </span>
    </div>
</template>
<script>
export default {
  
}
</script>

