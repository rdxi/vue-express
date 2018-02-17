<template lang='ejs'>
  <div class="page page--profile">
    <h3>loggedIn page</h3>
    <p>{{ welcome }}</p>
    	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
    	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">


    <div style="padding-top:80px; word-wrap:break-word;">
    <div class="container">

    	<div class="row">
        isLoggedIn:{{loggedIn}}
    		<!-- LOCAL INFORMATION -->
    		<div class="col-sm-6">
    			<div class="well">

    			</div>
    		</div>

    	</div>

    </div>
  </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import store from '../modules/store'
export default {


  methods:{
...mapActions(['isLoggedIn']),
},
  data: function() {
    //isLoggedIn()
    return {
      welcome: 'Welcome to isLoggedIn page!',
      loggedIn:store.state.isLoggedIn
    }
  }

}
</script>

<style scoped>
  .profile-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }

  .profile-logo a:hover {
    opacity: 0.8;
  }
</style>
