<template>
  <div id="app">
    <!-- <h1>{{msg}}</h1>
    <some-component></some-component> -->
    <posts></posts>
  </div>
</template>

<script>
import SomeComponent from './SomeComponent.vue';
import Posts from './Posts.vue';

export default {
  components: {SomeComponent, Posts},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>