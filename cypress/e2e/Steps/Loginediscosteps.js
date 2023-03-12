import {Given,When,Then,And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../Pages/Loginediscosteps'

const login=new LoginPage()

When(/^Login to Ediscovery with "([^"]*)"$/,  (text) => {

    login.enterUserName(text)
    login.enterPassword(text)
    login.clickLoginButton()

});