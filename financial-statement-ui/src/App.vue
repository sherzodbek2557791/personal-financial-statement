<template>
  <div id="app" class="wrapper">
    <nav>
      <router-link to='/'>{{ $t('navigation.home') }}</router-link>
      <router-link to='/blog'>{{ $t('navigation.blog') }}</router-link>
    </nav>

    <!-- ============================================================= BODY  ============================================================= -->
    <router-view></router-view>
    <!-- ============================================================= BODY : END ============================================================= -->
  </div><!-- /.wrapper -->
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    currencyIndex(){
      return this.$store.state.uiState.currency.index;
    },
    currencyFormatAmount(){
      return this.app.currencies[this.currencyIndex].format(this.$store.state.cart.amount);
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  overflow: auto;
}

</style>
