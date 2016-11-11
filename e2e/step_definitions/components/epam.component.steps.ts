import {EpamComponent} from '../../support/components/epam.component';
import {browser, protractor} from 'protractor';


export  = function() {
    let chai = require('chai').use(require('chai-as-promised'));
    let expect = chai.expect;
    let  epamComponent: EpamComponent;

    this.Before(() => {
        epamComponent = new EpamComponent();
    });

    this.When(/^careers item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
    });

    this.Then(/^I expect to see app.component heading$/, (title) => {
        return expect(browser.getTitle()).to.eventually.equal(title);
    });
}