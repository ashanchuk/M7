const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.findButton = new Element("class","header-search__button header__icon");
    };

    open() {
        return super.open("https://www.epam.com/careers");
    };
};

module.exports = CareersPage;