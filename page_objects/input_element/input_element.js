const Element = require("../base_elements/base_element");

class InputElement extends Element {
    constructor() {
        super();
    };

    sendKeys(listOfKeys){
        return this.element.sendKeys(listOfKeys);
    };
};

module.exports = InputElement;