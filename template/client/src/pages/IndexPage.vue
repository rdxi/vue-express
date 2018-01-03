<template>
  <div class="page page--index">
    <h3>Home page</h3>
    <p>{{ welcome }}</p>
    <posts></posts>
  </div>
</template>

<script>
import Posts from './../components/Posts.vue';

export default {
  components: {
    Posts
  },
  data: function() {
    return {
      welcome: 'Welcome to home page!'
    }
  }
}
</script>