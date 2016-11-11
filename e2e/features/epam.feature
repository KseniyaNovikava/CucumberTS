Feature: e2e cucumber tests

  
  Scenario: Header navigation
    Given I open home page
    When page is opened
    And career item is loaded
    Then I go to careers page 
    And I expect to see "Careers" heading

    When solutions item is loaded
    Then I go to the solutions page
    And I expect to see "Solutions" heading

    When industries item is loaded
    Then I go to the industries page
    And I expect to see "Industries" heading

    When about item is loaded
    Then I go to the about page
    And I expect to see "About" heading

    When ideas item is loaded
    Then I go to the ideas page
    And I expect to see "Ideas" heading

    When contact item is loaded
    Then I go to the contact page
    And I expect to see "Contact" heading

  @M2JS
  Scenario: Job Serach
    Given I open home page
    When page is opened
    And career item is loaded
    Then I go to careers page 
    And I expect to see "Careers" heading

    When I type "Javascript" in the job serach filed
    Then autocmplete should appear
    And it should contain "JavaScript" text
    When I click on search button
    Then results table will appear
    And search results should be correct






