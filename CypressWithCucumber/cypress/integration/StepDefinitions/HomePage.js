import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import homePage from "../PageLocators/homepagelocators.js"
const homepage = new homePage();

Given('I open reed.co.uk', ()=>{
cy.visit('/');
homepage.AcceptCookiesButton()

})
    
When('I enter {string} in what Text Field', role =>{
    homepage.EnterToWhatTextFiled(role)
    
})

When('I enter {string} in where text Field', place =>{
    homepage.EnterToWhereTextFiled(place)
    
})

When('I click on Search button', () =>{
    homepage.ClickOnSearch()
    
})

Then('5 randomly selected results contain the {string} in the search result page headings', SearchResult =>{
//
        
})   