<template>
  <section class="wrap">
    <Header></Header>
    <div class="app_router_view">
      <router-view/>
    </div>
    <Footer></Footer>
  </section>
</template>
<script>
import Header from './components/common/header';
import Footer from './components/common/footer';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>
<style>
</style>
