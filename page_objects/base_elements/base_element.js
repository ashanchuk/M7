class Element {
    constructor(selectorType, selector) {
        switch (selectorType) {
            case "css":
                this.element = element(by.css(selector));
                break;
            case "xpath":
                this.element = element(by.xpath(selector));
                break;
            case "name":
                this.element = element(by.name(selector));
                break;  
            case "id":       
                this.element = element(by.id(selector));
                break;
            case "class":       
                this.element = element(by.className(selector));
                break;    
            default:
                this.element = element(by.css(selector));
                break;
        };        
    };

    click() {
        return this.element.click();
    };

    getText() {
        return this.element.getText();
    };

    sendKeys(args) {
        return this.element.sendKeys(args);
    }

    submit() {
        return this.element.submit();
    }
};

module.exports = Element;