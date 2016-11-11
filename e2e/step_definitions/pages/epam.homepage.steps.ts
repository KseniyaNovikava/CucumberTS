import {EpamHomePage} from '../../support/pages/epam.homepage';
import {browser,protractor} from 'protractor';
import {EpamComponent} from '../../support/components/epam.component';
import {BrowserHelper} from '../../support/helper/browser.helper';

export  = function() {

    let chai = require('chai').use(require('chai-as-promised'));
    let expect = chai.expect;
    let  epamComponent: EpamComponent;
      this.Before(() => {
        epamComponent = new EpamComponent();
        browser.driver.manage().window().maximize();
    });

    this.Given(/^I open home page$/, () => {
        return EpamHomePage.openPage();
    });
    this.When(/^career item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
    });
    this.When(/^page is opened$/, () => {
        return expect(browser.getTitle()).to.eventually.equal(EpamHomePage.title);
    });
    this.Then(/^I go to careers page$/, () => {
    	return epamComponent.careerMenuItem.click();
    });
    this.Then(/^I expect to see "([^"]*)" heading$/, (title) => {
    	return expect(browser.getTitle()).to.eventually.equal(title);
    });
    this.When(/^solutions item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.solutionsMenuItem), 15000);
    });
  	this.Then(/^I go to the solutions page$/, () => {
    	return epamComponent.solutionsMenuItem.click();
    });
    this.When(/^industries item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.industriesMenuItem), 15000);
    });
  	this.Then(/^I go to the industries page$/, () => {
    	return epamComponent.industriesMenuItem.click();
    });
    this.When(/^about item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.aboutMenuItem), 15000);
    });
    this.Then(/^I go to the about page$/, () => {
    	return epamComponent.aboutMenuItem.click();
    });
    this.When(/^ideas item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.ideasMenuItem), 15000);
    });
 	this.Then(/^I go to the ideas page$/, () => {
    	return epamComponent.ideasMenuItem.click();
    });
    this.When(/^contact item is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.contactMenuItem), 15000);
    });
 	this.Then(/^I go to the contact page$/, () => {
    	return epamComponent.contactMenuItem.click();
    });


}