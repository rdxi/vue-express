<template lang='ejs'>
  <div class="page page--profile">
    <h3>profile page</h3>
    <p>{{ welcome }}</p>
    	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
    	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">


    <div style="padding-top:80px; word-wrap:break-word;">
    <div class="container">

    	<div class="page-header text-center">
    		<h1><span class="fa fa-anchor"></span> Profile Page</h1>
    		<a href="/logout" class="btn btn-default btn-sm">Logout</a>
    	</div>

    	<div class="row">

    		<!-- LOCAL INFORMATION -->
    		<div class="col-sm-6">
    			<div class="well">
            <h3><span class="fa fa-user"></span>{{ user.email}}Local</h3>

              <p>
                <strong>id</strong>:  {{user.id}} <br>
                <strong>email</strong>:  {{user.email}}<br>
                <strong>password</strong>:  {{user.password}}

    					</p>

    			</div>
    		</div>

    	</div>

    </div>
  </div>

  </div>
</template>

<script>
import store from '../modules/store'
export default {
  data: function() {
    return {
      welcome: 'Welcome to profile page!',
      user:  store.state.user

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
