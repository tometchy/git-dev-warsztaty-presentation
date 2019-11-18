
Feature('contact-button');

Scenario('test warsztaty w firmie buton', (I) => {
  I.amOnPage('http://localhost:4000');
  I.click('#warsztaty-w-firmie-button');
  I.see('NAZWA FIRMY');
});

Scenario('test warsztaty otwarte buton', (I) => {
  I.amOnPage('http://localhost:4000');
  I.click('#warsztaty-otwarte-button');
  I.see('PAN/PANI');
});
