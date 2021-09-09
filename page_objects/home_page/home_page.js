const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class HomePage extends BasePage {
    constructor() {
        super();
        this.acceptButton = new Element("xpath", "//span[contains(text(),'Accept')]");
        this.findJobButton = new Element("xpath", "//span[contains(text(),'Find Your Dream Job')]");
    };

    open() {
        return super.open("https://www.epam.com/");
    };
};

module.exports = HomePage;