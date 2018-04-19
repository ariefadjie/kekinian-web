<template>
  <div>
  <section class="hero is-success is-height">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              Kekinian
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <hero-nav></hero-nav>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Kekinian
        </h1>
        <h2 class="subtitle">
          Find Your Hype Place Today
        </h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <hero-tab></hero-tab>
    </div>
  </section>
  
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
  
  </div>
</template>
<script>
  import HeroNav from "./components/Nav";
  import HeroTab from "./components/Tab";
export default{
  components : {
    HeroNav,
    HeroTab
  }
}
</script>
