"use strict"
import {protractor, browser} from "protractor";
import {EpamComponent} from '../../support/components/epam.component';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let  epamComponent: EpamComponent;

import { binding, given, when, before,then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

import {EpamHomePage} from '../../support/pages/epam.homepage';

@binding()
class CareerPageSteps {
	@before()
    public beforeAllScenarios(): void {
       epamComponent = new EpamComponent();
        browser.driver.manage().window().maximize();
    };
  @when(/^I type "([^"]*)" in the job serach filed tsflow$/)
  private serechForJob(text,callback: CallbackStepDefinition) {
    	epamComponent.searchInput.sendKeys(text);
    	callback();
    };
     @then(/^autocmplete should appear tsflow$/)
     private isAutocompleteAppear(callback: CallbackStepDefinition) {
    	 browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.autocompleteField), 15000);
    	 callback();
    };
     @then(/^it should contain "([^"]*)" text tsflow$/)
     private isAutocompleteCorrect(text,callback: CallbackStepDefinition) {
     	expect(epamComponent.autocompleteField.getText()).to.eventually.equal(text).and.notify(callback);
    	
    };
     @when(/^I click on search button tsflow$/)
     private clickSearch(callback: CallbackStepDefinition) {
    	 epamComponent.searchButton.click();
    	 callback();
    };
     @then(/^results table will appear tsflow$/)
      private resultsLoaded(callback: CallbackStepDefinition) {
    	browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.searchHeader), 15000);
    	 callback();
    };
     @then(/^search results should be correct tsflow$/)
     private resultsCorrect(callback: CallbackStepDefinition) {
    	expect(epamComponent.searchHeader.getText()).to.eventually.equal('"Javascript"').and.notify(callback);
    };



}

export = CareerPageSteps;