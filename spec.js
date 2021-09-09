const { browser, until, element, by } = require("protractor");
const PageFactory = require("./page_objects/pageFactory");

describe('search from Careers page', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();
  });

  it('should search for test from careers page', async function () {
    await PageFactory.getPage("Home").open();
    await PageFactory.getPage("Careers").findButton.click();

    await PageFactory.getPage("Careers").wait(2000);
    await PageFactory.getPage("Careers").Header.searchInput.sendKeys('test');
    await PageFactory.getPage("Careers").Header.searchInput.submit();

    await PageFactory.getPage("Careers").wait(2000);
  
    const pageTitle = await PageFactory.getPage("Careers").getTitle();
    expect(pageTitle).toContain('Search');

    await PageFactory.getPage("Careers").close();
  });
});