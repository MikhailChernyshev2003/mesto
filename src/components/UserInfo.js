export default class UserInfo {

    constructor(userNameSelector, userInfoSelector) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }
  
    getUserInfo() {
        this.userData = {};
        this.userData.name = this._userName.textContent;
        this.userData.info = this._userInfo.textContent;
        return this.userData;
    }
  
    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.job;
    }  
}