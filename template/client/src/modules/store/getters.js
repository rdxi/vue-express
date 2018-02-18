export default {
 me:state=> state.user,
  getSession: state => state.session,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  getMessages: state => state.messages,
  getNotifications: state => state.notifications,
	isLoggedIn: state => state.isLoggedIn&&state.user,
	getErrorMesg: state => state.errormesg
}
