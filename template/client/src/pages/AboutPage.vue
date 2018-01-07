<template>
  <div class="page page--about">
    <h3>About page</h3>
    <p>{{ welcome }}</p>
    <p class="about-logo">
      <a href="http://github.com/rdxi/vue-express" target="_blank">
        <img src="images/vue-express-logo.png" alt="logo" width="300">
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      welcome: 'Welcome to about page!'
    }
  }

}
</script>

<style scoped>
  .about-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }

  .about-logo a:hover {
    opacity: 0.8;
  }
</style>
