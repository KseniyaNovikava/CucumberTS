Feature: e2e cucumber tests


  Scenario: Header navigation tsflow
    Given I open home page tsflow
    When page is opened tsflow
    And career item is loaded tsflow
    Then I go to careers page tsflow
    And I expect to see "Careers" heading tsflow

    When solutions item is loaded tsflow
    Then I go to the solutions page tsflow
    And I expect to see "Solutions" heading tsflow

    When industries item is loaded tsflow
    Then I go to the industries page tsflow
    And I expect to see "Industries" heading tsflow

    When about item is loaded tsflow
    Then I go to the about page tsflow
    And I expect to see "About" heading tsflow

    When ideas item is loaded tsflow
    Then I go to the ideas page tsflow
    And I expect to see "Ideas" heading tsflow

    When contact item is loaded tsflow
    Then I go to the contact page tsflow
    And I expect to see "Contact" heading tsflow

@M2JS
  Scenario: Job Serach tsflow
    Given I open home page tsflow
    When page is opened tsflow
    And career item is loaded tsflow
    Then I go to careers page tsflow
    And I expect to see "Careers" heading tsflow

    When I type "Javascript" in the job serach filed tsflow
    Then autocmplete should appear tsflow
    And it should contain "JavaScript" text tsflow
    When I click on search button tsflow
    Then results table will appear tsflow
    And search results should be correct tsflow



