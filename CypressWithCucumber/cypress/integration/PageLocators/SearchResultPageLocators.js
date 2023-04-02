class SearchResultPage {
  elements = {
    ResultHeadingTxtLbl: () => cy.get('.row > .col-xs-12 > .job-result-heading > .job-result-heading__title > a'),
    FinacialServiceLbl: () => cy.get('.facets > :nth-child(7)'),
    FinacialServiceCount: () => cy.get('li.facet.sector.multiselect.selected > span'),
    SearchResultFilteredCount: () => cy.get(':nth-child(1) > .row-top > .row > .col-md-12 > .page-counter')
  }

  VerifySearchResult(ResultValue) {
    this.elements.ResultHeadingTxtLbl().filter(':contains(' + ResultValue + ')')
      .should('have.length.least', 5)
  }
 
  SelectFinacialService() {
    this.elements.FinacialServiceLbl().click({force: true});
    cy.wait(2000);
  }

GetFinacialServiceCount() {
      this.elements.FinacialServiceCount().invoke('text').then((num) => {
      var FCount = num.split("(")[1].split(")")[0];  
      // cy.log(FCount);
      return FCount;
    })
  }

  GetFFilteredResultCount() {
    this.elements.SearchResultFilteredCount().invoke('text').then((num) => {
      var RCount = num.split("of")[1].split(" ")[1];  
      // cy.log(RCount);
      return RCount;
    })
  }  

 
 VerificationOfFilteredResult() { 
  this.elements.FinacialServiceCount().invoke('text').then((FSCtext) => {
    var FSCount=FSCtext.split("(")[1].split(")")[0]
    this.elements.SearchResultFilteredCount().invoke('text').then((SRFCtext) => {
     var SRFCount=SRFCtext.split("of")[1].split(" ")[1]
    expect(FSCount).to.equal(SRFCount) 
      }) 
   }) 
  }
}
export default SearchResultPage;