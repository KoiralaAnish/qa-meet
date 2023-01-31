
const loginPage =require('../pages/login.page')
describe('template spec', () => {
  
  it('should login to the system', () => {
    cy.visit('/')
    cy.fixture('user.json').then((data)=>{
      loginPage.appLogin(data.username,data.password)
    })
    //assertions
  })
})