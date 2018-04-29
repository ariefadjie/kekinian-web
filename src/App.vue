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
            <header-nav></header-nav>
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
    <div class="hero-foot" v-if="this.isTabVisible">
      <header-tab></header-tab>
    </div>
  </section>
  
  <section class="section">
    <div class="container">
      <router-view :key="$route.path"></router-view>
    </div>
  </section>

  <footer class="footer">
    <div class="container has-text-centered">
      Copyright &copy; 2018 by Arief Adjie Wicaksono. Made with <i class="fa fa-heart has-text-danger"></i> and Vue.
    </div>
  </footer>
  
  </div>
</template>
<script>
  import HeaderNav from "./components/Nav";
  import HeaderTab from "./components/Tab";
export default{
  data() {
    return {
      isTabVisible : true,
    }
  },
  components : {
    HeaderNav,
    HeaderTab
  }
}
</script>
