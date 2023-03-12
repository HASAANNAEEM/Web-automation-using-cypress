import cred from "../TestData/users.json"
class loginediscoPage
{


    elements = {
        usernameFiled: ()=> cy.get('#username'),
        passwordField: ()=> cy.get('#password'),
        loginButton: ()=> cy.get('#Login1_LoginButton')
    }

    enterUserName(usernme) {

        cy.log(">>>>>>>>>>>>>>>>>>>"+cred[usernme]['username']);
        this.elements.usernameFiled().type(cred[usernme]['username']);
    }

    enterPassword(passwordText){
        this.elements.passwordField().type(cred[passwordText]['password']);
    }

    clickLoginButton() {
        this.elements.loginButton().click()
        // cy.get('#Login1_LoginButton').click()

    }
}

export default loginediscoPage;