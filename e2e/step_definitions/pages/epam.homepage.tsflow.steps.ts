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
class IndexPageSteps {
	@before()
    public beforeAllScenarios(): void {
       epamComponent = new EpamComponent();
        browser.driver.manage().window().maximize();
    }

    @given(/^I open home page tsflow$/)
   private  loadHomePage(callback: CallbackStepDefinition) {
        EpamHomePage.openPage();
        callback();
    };
    @when(/^page is opened tsflow$/)
    private indexPageIsOpened(callback: CallbackStepDefinition) {
        expect(browser.getTitle()).to.eventually.equal(EpamHomePage.title).and.notify(callback);
    };

     @when(/^career item is loaded tsflow$/) 
     private careerItemVisible(callback: CallbackStepDefinition) {
       browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.careerMenuItem), 15000);
       callback();
    };
    @then(/^I go to careers page tsflow$/)
    private goToCareerPage(callback: CallbackStepDefinition) {
    	epamComponent.careerMenuItem.click();
    	callback();
    };
     @then(/^I expect to see "([^"]*)" heading tsflow$/)
     private PageIsOpened(title, callback: CallbackStepDefinition) {
			expect(browser.getTitle()).to.eventually.equal(title).and.notify(callback);
     };
      @when(/^solutions item is loaded tsflow$/)
       private solutionsItemVisible(callback: CallbackStepDefinition) {
			browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.solutionsMenuItem), 15000);
			callback(); 
     };
     @then(/^I go to the solutions page tsflow$/)
    	private goToSolutionsPage(callback: CallbackStepDefinition) {
    	epamComponent.solutionsMenuItem.click();
    	callback();
    };
    @when(/^industries item is loaded tsflow$/)
       private industriesItemVisible(callback: CallbackStepDefinition) {
			browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.industriesMenuItem), 15000);
			callback(); 
     };
     @then(/^I go to the industries page tsflow$/)
    	private goToIndustriesPage(callback: CallbackStepDefinition) {
    	epamComponent.industriesMenuItem.click();
    	callback();
    };
    @when(/^about item is loaded tsflow$/)
       private aboutItemVisible(callback: CallbackStepDefinition) {
			browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.aboutMenuItem), 15000);
			callback(); 
     };
     @then(/^I go to the about page tsflow$/)
    	private goToAboutPage(callback: CallbackStepDefinition) {
    	epamComponent.aboutMenuItem.click();
    	callback();
    };
    @when(/^ideas item is loaded tsflow$/)
       private ideasItemVisible(callback: CallbackStepDefinition) {
			browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.ideasMenuItem), 15000);
			callback(); 
     };
     @then(/^I go to the ideas page tsflow$/)
    	private goToIdeasPage(callback: CallbackStepDefinition) {
    	epamComponent.ideasMenuItem.click();
    	callback();
    };
     @when(/^contact item is loaded tsflow$/)
       private contactItemVisible(callback: CallbackStepDefinition) {
			browser.wait(protractor.ExpectedConditions.visibilityOf(epamComponent.contactMenuItem), 15000);
			callback(); 
     };
     @then(/^I go to the contact page tsflow$/)
    	private goToContactPage(callback: CallbackStepDefinition) {
    	epamComponent.contactMenuItem.click();
    	callback();
    };


}

export = IndexPageSteps;