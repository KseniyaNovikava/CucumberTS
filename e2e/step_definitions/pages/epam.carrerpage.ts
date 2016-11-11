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

    this.When(/^I type "([^"]*)" in the job serach filed$/, (text) => {
        return epamComponent.searchInput.sendKeys(text);
    });
    this.Then(/^autocmplete should appear$/, () => {
        return  browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
    });
    this.Then(/^it should contain "([^"]*)" text$/, (text) => {
        return expect(epamComponent.autocompleteField.getText()).to.eventually.equal(text);
    });
    this.When(/^I click on search button$/, () => {
        return epamComponent.searchButton.click();
    });
    this.Then(/^results table will appear$/, () => {
        return  browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.searchHeader), 15000);
    });
    this.Then(/^search results should be correct$/, () => {
        return expect(epamComponent.searchHeader.getText()).to.eventually.equal('"Javascript"');
    });


  }