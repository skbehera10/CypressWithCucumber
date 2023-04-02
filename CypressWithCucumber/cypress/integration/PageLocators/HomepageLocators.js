class homePage {
  elements = {
    AcceptCookies: () => cy.get('#onetrust-accept-btn-handler'),
    WhatTextField: () => cy.get('#main-keywords'),
    WhereTextField: () => cy.get('#main-location'),
    SearchButton: () => cy.get('#homepageSearchButton')
  }

  AcceptCookiesButton() {
    this.elements.AcceptCookies().click({force: true})
  }

  EnterToWhatTextFiled(What) {
    this.elements.WhatTextField().type(What,{force: true}).type('{downArrow}').click();
    //cy.wait(2000)
  }
  EnterToWhereTextFiled(where) {
    this.elements.WhereTextField().type(where,{force: true}).type('{downArrow}').click();
    // cy.wait(2000)
  }

  ClickOnSearch() {
    this.elements.SearchButton().click({force: true})
    cy.url().should('contains','-jobs-in-')
  }
  
}
export default homePage;