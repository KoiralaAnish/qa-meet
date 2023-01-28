
const loginPage ={
    elements: {
        username: '[cy-data="username"]',
        password: '[cy-data="passwodrd"]' ,
        loginButton: '[cy-data="submit-btn"]'
    },
    fillUsername(username) {
        
        cy.get(this.elements.username).type(username)
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