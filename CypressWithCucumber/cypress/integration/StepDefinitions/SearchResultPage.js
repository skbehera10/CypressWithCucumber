import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import SearchResultPage from "../PageLocators/SearchResultPageLocators.js"
const SearchResultpage = new SearchResultPage();




Then('Randomly 5 selected results should contain the {string} in the search result page headings', role=>{
  SearchResultpage.VerifySearchResult(role);

})

When('I selected the Financial Services checkbox', ()=>{
    SearchResultpage.SelectFinacialService();
})

    
Then('The number next to the filter should be equal to the total jobs count after the filter is applied', ()=>{
  SearchResultpage.VerificationOfFilteredResult()
  
})


 
    

