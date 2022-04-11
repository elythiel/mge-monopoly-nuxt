<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {gsap} from 'gsap';

export default {
  components: {Nav, Footer}
}
</script>
