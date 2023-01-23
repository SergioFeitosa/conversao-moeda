const convert = require('../convert')
var expect  = require("chai").expect;

describe('Conversor de Moeda', () => {

    it('Deve converter corretamente Dolar para Real', (done) => {

      const resultado = convert.fahrenheitCelsius(131);

      expect(resultado).to.equal(55);
      done();
  
    });

    it('Deve converter corretamente Real para Dolar', (done) => {

      const resultado = convert.celsiusFahrenheit(55);

      expect(resultado).to.equal(131);
      done();
  
    });    
  
  });