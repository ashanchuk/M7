const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };

    wait(waitInMillieconds) {
        return browser.sleep(waitInMillieconds);
    };

    getCurrentUrl() {
        return browser.getCurrentUrl();
    };

    open(url) {
        return browser.get(url);
    };

    getTitle() {
        return browser.getTitle();
    };

    close() {
        return browser.close();
    }
};

module.exports = BasePage;