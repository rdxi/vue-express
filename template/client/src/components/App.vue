<template>
  <div id="app">
    <nav>
      <span>Vue router links: </span>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/!@#$%">404 page</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>