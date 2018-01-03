<template>
  <div class="page page--about">
    <h3>About page</h3>
    <p>{{ welcome }}</p>
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