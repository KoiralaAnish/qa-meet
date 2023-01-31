
const loginPage ={
    elements: {
        username: '[cy-data="usernaame"]',
        password: '[cy-data="password"]' ,
        loginButton: '[cy-data="submit-btn"]'
    },
    fillUsername(value) {
        
        cy.get(this.elements.username).type(value)
    },
    fillPassword(value) {
        
        cy.get(this.elements.password).type(value)
    },
    submit(){
        
        cy.get(this.elements.loginButton).click()
    },
    appLogin(username,password) {

        this.fillUsername(username)
        this.fillPassword(password)
        this.submit()
    }
};

module.exports=loginPage