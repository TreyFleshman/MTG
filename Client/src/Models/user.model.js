export class UserData {
    constructor(userName, password, confirm_password) {
        this.userName = userName;
        this.password = password;
        this.confirm_password = confirm_password;
    }
    
    isValidForSave() {
        if (this.userName === '') {
            return { isVaild: false, error: "Please enter an username." }
        } else if (this.password !== this.confirm_password || this.password === '') {
            return ({ isVaild: false, error: "Passwords do not match" })
        } else { return { isVaild: true, error: '' } };
    }
}