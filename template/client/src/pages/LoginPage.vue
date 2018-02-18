<template lang='ejs'>
<div style="position:relative ;flow:left;">
<div style="position:absolute`">
    <!-- Site stylesheet-->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
  <!--style>
      body 		{ padding-top:80px; }
  </style-->
  <div class="bg"></div>
    <div class="bg-overlay"></div>
    <div class="center">
    <div class="panel">
      <div class="bg"></div>
      <div class="bg-overlay"></div>
      <div class="content">


<div class="">
<!--div style="  background:red; color:white; padding:10px;" v-if="failedlogin">
I should only display if  <strong>failedlogin</strong>
</div-->

<div><small>Login</small></div>
<form method="POST" action="/login" @submit.prevent="login({ email, password })">
  <div class="form-group">
    <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="email" type="email" placeholder="email">
  </div>
  <div class="form-group">
    <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="password" type="password" placeholder="password">
  </div>
  <button type="submit" class="rounded-0 btn btn-secondary btn-block">LOGIN</button>
</form>
<hr/>

</div>



<hr>

<p>Need an account? <a href="/signup">Signup</a></p>
<p>Or go <a href="/">home</a>.</p>


</div>
<div class="flash">

<!-- show any messages that come back with authentication -->
<% if (message.length > 0) { %>
<div class="alert alert-danger"><%= message %></div>
<% } %>

<!-- show any messages that come back with authentication

<div class="alert alert-danger"><%= message %></div>
<!-- if messages.error--
<div class="alert alert-danger">
<!--               for error in messages.erro--
</div>
<div>"error.msg"</div>
<!-- if messages.info--
<div class="alert alert-success"></div>
<!--for info in messages.info
div= info.msg
//if messages.error
-->
</div>
</div>
</div>
</div></div>
</template>
<script src="/scripts/frontend.js"></script>

<script>

import {mapActions} from 'vuex'
import * as axios from 'axios'

export default {
data (){ return {
  email: '',
  password: ''
}
},
computed: {
},
methods: {
...mapActions([ 'authenticate']),
login: function() {
 let sr=this.$router
let sdata={
    email: this.email,
    password: this.password,
    router:sr
  }
  this.$store.dispatch('authenticate',sdata);
  //this.authenticate(sdata);
}

}
}
</script>
<style scoped>
button {
cursor: pointer
}
</style>
