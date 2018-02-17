import Vue from "vue";
import axios from "axios";
import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER, SESSION, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, ISLOGGEDIN} from "./types";

export const NAMESPACE= "/api/session";
export const VERSION="/v1";


export const addMessage = ({ commit,state }, item) => {
	commit(ADD_MESSAGE, item);
};

export const addNotification = ({ commit,state }, item) => {
	commit(ADD_NOTIFICATION, item);
};

export default {

/**
   * Authenticates a new user with given email and password
   * @param {object} store
   * @param {object} email and password
   */
	  authenticate({ commit }, {email, password,router}) {
			return new Promise(resolve => {
        setTimeout(() => {
	       commit(LOGIN); // show spinner
				 let sr=this.$router
					 let sdata={
							 email: email,
							 password: password
						 }

							 	axios.post('/loginvue',sdata) .then(function (response) {
							 					let user =  response.data.user;
												localStorage.setItem("token", "JWT");
							 				 commit(SET_USER, user)
							 				 if (user ) {
							 					 commit('setDisplayName', user.displayName)
							        	 commit(LOGIN_SUCCESS);
												 commit(ISLOGGEDIN,1);
											 }
											 else {
												 commit(LOGIN_FAILED);
												 commit(ISLOGGEDIN,0);
											 }
							          resolve();
												router.push(response.data.path,{params:{user:response.data.user,found:response.data.found}})

			 })
			 .catch(function (error) {
				 commit(ISLOGGEDIN,0);
				  commit(LOGIN_ERROR,error.message);
			 })

		 }, 1000);
	 });
   },
	 /**
		* checks if  the user is isLoggedIn the application
		* @param {object} store
		*/
    isLoggedIn({ commit }) {
			return new Promise(resolve => {
				setTimeout(() => {
			  localStorage.removeItem("token");
		 localStorage.setItem("token", "JWT");
		 axios.post('/isLoggedIn') .then(function (response) {
			 commit(ISLOGGEDIN,response.data.isLoggedIn);
			// return (response.isLoggedIn);
  })
 .catch(function (error) {
	 commit(ISLOGGEDIN,0);
	 commit(LOGIN_ERROR,error.message);
	 //console.log(error);
 resolve();
})
}, 1000);
});

},
	 /**
		* fetches the LoggedIn user of the application
		* @param {object} store
		*/
    getLoggedInUser({ commit }) {
			return new Promise(resolve => {
        setTimeout(() => {
 			localStorage.removeItem("token");
		 axios.post('/getLoggedInUser') .then(function (response) {
			 let user =  response.data.user;
 			localStorage.setItem("token", "JWT");
 		 commit(SET_USER, user);
 		resolve();
  })
 .catch(function (error) {
	 commit(LOGIN_ERROR,error.message);
	 //console.log(error);
 resolve();
})
}, 1000);
});

},
	 /**
		* FEtches the session of the user , probably not the best way to go  in
		security terms,  better to add/find/remove/get/set api for items in session
		usnig vuex && axios rather than sharing the session itself, just shown here for
		simplicity...
		* @param {object} store
		*/
    getUserSession({ commit }) {
			return new Promise(resolve => {
				setTimeout(() => {
     localStorage.removeItem("token");
		  axios.post('/getUserSession') .then(function (response) {
				localStorage.setItem("token", response.data.session.sessId);
			 commit(SESSION,response.data.session);
resolve();
  })
 .catch(function (error) {
	 commit(LOGIN_ERROR,error.message);
 //console.log(error);
 resolve();
})
}, 1000);
});

},

	 /**
	  * Logouts the user from the application
	  * @param {object} store
	  */
	 logout({ commit }) {
		 return new Promise(resolve => {
		 	setTimeout(() => {
		localStorage.removeItem("token");
	 	axios.post('/logoutvue') .then(function (response) {
	 	 commit(LOGOUT);
		 resolve();
	 })
	 .catch(function (error) {
	 commit(LOGOUT);
	// console.log(error);
	 resolve();
	 })
 }, 1000);
});

	 }

};
