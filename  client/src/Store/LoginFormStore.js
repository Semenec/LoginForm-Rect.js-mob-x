import { observable, action } from 'mobx';

class LoginFormStore {

	@observable loginStatus = null;
	@observable loginInput = '';
	@observable passwordInput = '';

	@action('loginFalse')
		loginFalse() {
			this.loginStatus = false;
		}
	@action('loginTrue')
		loginTrue() {
			this.loginStatus = true;
		}
	@action('loginChange')
		loginChange(e) {
			this.loginInput = e
		}
	@action('passwordChange')
		passwordChange(e) {
			this.passwordInput = e
		}
	@action('getLogin')
		getLogin() {
			fetch('http://localhost:8080/login', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						Username: this.loginInput,
						Password: this.passwordInput
					})
				})
				.then((response) => {
					return response.json();
				})
				.then((json) => {
					if (json.Auth === 'Logged') {
						this.loginTrue()
					} else if ( json.Auth === 'Denied') {
						this.loginFalse()
					}

		})
	}
}

export default new LoginFormStore();
