describe('Rest', function() {
  beforeEach(function () {
    cy.get('.fa-angle-left').click()
  })
  it('Should be able to play the rest counter', function() {
	  cy.get('.counter').invoke('text').then((text1) => {

		  cy.get('.fa-play').click()
		  cy.wait(3000)
		  cy.get('.counter').invoke('text').should((text2) => {
		    expect(text2).to.be.lessThan(text1)
		  })

	  })
  })

  it('Should be able to pause the rest counter', function() {
  	  cy.get('.fa-play').click()
	  cy.wait(3000)
	  cy.get('.fa-pause').click()
	  cy.get('.counter').invoke('text').then((text1) => {

		  cy.get('.fa-pause').click()
		  cy.wait(3000)
		  cy.get('.counter').invoke('text').should((text2) => {
		    expect(text2).to.equal(text1)
		  })

	  })
  })

  it('Should be able to stop the rest counter', function() {
	  cy.get('.counter').invoke('text').then((text1) => {
        cy.get('.fa-play').click()
	    cy.wait(3000)
	    cy.get('.fa-stop').click()
        cy.get('.counter').invoke('text').should((text2) => {
          expect(text2).to.equal(text1)
	    })

	  })
  })
})