import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER, SESSION, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, ISLOGGEDIN} from "./types";
export default {

	    [LOGIN] (state) {
	      state.pending = true;
	    },
			[LOGIN_SUCCESS] (state) {
	      state.isLoggedIn = 1;
	      state.pending = false;
	    },
			[LOGIN_ERROR] (state,value) {
	      state.pending = false;
				state.errormesg = value;
	    },
			[LOGIN_FAILED] (state) {
	      state.isLoggedIn = 0;
	      state.pending = false;
	    },
			[LOGIN_SUCCESS] (state) {
	      state.isLoggedIn = 1;
	      state.pending = false;
	    },

			[ISLOGGEDIN] (state,value) {
	      state.isLoggedIn = value;
	     },
	    [LOGOUT](state) {
	      state.isLoggedIn = 0;
	    },

	[ADD_MESSAGE] (state, item) {
		state.messages.splice(0);
		state.messages.push(item);
	},

	[ADD_NOTIFICATION] (state, item) {
		state.notifications.splice(0);
		state.notifications.push(item);
	},

	[SET_USER] (state, user) {
		state.user = user;
	},
	[SESSION]  (state, session) {
		state.session = session;
	},
 
}
