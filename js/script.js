function init() {
    Tabletop.init( {
      //key: 'https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
      //key: 'https://docs.google.com/spreadsheets/d/1lupfqBIWuExmeB1eDWYkeh0RRCV0nusDmnbpFLLcm6A/pubhtml',
      //key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5TxZU8KxXaMkm35HBn_W_pufL9eh3bAHCqY3vw4yCBIgdinWBdCsdbQfijxVGdjAxZsOeSlKFx6O3/pubhtml',
      key: 'https://docs.google.com/spreadsheets/d/1lupfqBIWuExmeB1eDWYkeh0RRCV0nusDmnbpFLLcm6A/edit?usp=sharing',
      simpleSheet: true }
    ).then(function(data, tabletop) { 
      console.log(data)
    })
  }
  window.addEventListener('DOMContentLoaded', init)