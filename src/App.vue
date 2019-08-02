<template>
  <div id="app">
    <Header />
    <div class="container">
			<Main />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Main from "./components/forms/IpipMain.vue";

export default {
  name: "app",
  components: {
    Footer,
    Main,
  }
};
</script>

<style>
#app {
}
</style>
