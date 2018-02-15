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
      <!-- Changed the = to == and 'bar' to '/bar' -->
<div style="  background:red; color:white; padding:10px;" v-if="failedlogin">
I should only display if  <strong>failedlogin</strong>
</div>

      <div><small>{{ titleText }}</small></div>
      <form method="POST" action="/login" @submit.prevent="login({ email, password })">
        <div class="form-group">
          <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="email" type="email" placeholder="email">
        </div>
        <div class="form-group">
          <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="password" type="password" placeholder="password">
        </div>
        <button type="submit" class="rounded-0 btn btn-secondary btn-block">{{ this.actionButtonText }}</button>
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

//  import {mapActions} from 'vuex'
import * as axios from 'axios'
  let TITLE_TEXT = {
    LOGIN: 'Already a member? Log in here!',
    SIGNUP: 'Don\'t have an account? Sign up here!'
  }
  let ACTION_BUTTON_TEXT = {
    LOGIN: 'LOGIN',
    SIGNUP: 'SIGN UP'
  }
  //vm.$forceUpdate()
  let fff=0
  export default {
    data (){ return {
        email: '',
        password: ''
      }
       //submitData: null
    },
    computed: {

      titleText () {
        return TITLE_TEXT.LOGIN
         //: TITLE_TEXT.SIGNUP
      },
      switchButtonText () {
        return  TITLE_TEXT.LOGIN
      },
      actionButtonText () {
        return ACTION_BUTTON_TEXT.LOGIN
      },
      failedlogin(){
        //:function() {
        if(this.fff===0&&this.$route.params.found)
          this.fff=this.$route.params.found;
        console.log('fl:',this.fff)
    	return this.fff===false
      }
    },
    methods: {
      /*...mapActions(['createUser', 'authenticate']),
      onSwitch () {
        this.isLogin = !this.isLogin
      },*/
     login: function() {
       let sr=this.$router
      let sdata={
          email: this.email,
          password: this.password
        }
        axios.post('/loginvue',sdata) .then(function (response) {
    sr.push(response.data.path,{params:{user:response.data.user,found:response.data.found}});
  })
  .catch(function (error) {
    console.log(error);
  })
        /*.then(() => {
          this.$router.push("/")
        });*/
      }
      /*
      onAction (ev) {
        ev.preventDefault()
        ev.stopPropagation()
      *///  let method = /*this.isLogin ?*/ this.authenticate /*: this.createUser*/
        /*method({email: this.email, password: this.password})
      }*/
    }
  }
</script>
<style scoped><!-- lang="sass"-->
  button {
    cursor: pointer
  }
</style>
