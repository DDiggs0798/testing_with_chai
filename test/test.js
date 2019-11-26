var mocha = require('mocha')
var expect = require('chai').expect
var { describe, it } = mocha

describe('My comprehension of the js basics is solid', () => {
    it('and this proves my awesomeness wit JS', () => {
        
        expect('the king of the cheat coders').to.be.a('string');
        expect({}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([(5)]).to.be.an('array').that.includes(5);
        expect({}).to.not.be.an('array')
        expect({model: 'nissan'}).to.have.a.property('model');
        expect({ make: 'tesla', model: 'cybertruck' }).to.include({ make: 'tesla', model: 'cybertruck' });
    })

    it('includes testing skills', () => {
        expect(2).not.to.equal('2')
        expect(Number('2')).not.to.equal('2')
        expect(2).to.equal(2)
        expect(Number('two')).to.be.NaN
        expect(Number('2')).not.to.be.NaN
        expect(2).not.to.be.NaN
        expect(Boolean(1)).to.be.true
    })

    it('Can i math?', () => {
        
    })
})



