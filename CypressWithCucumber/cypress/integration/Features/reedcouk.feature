Feature: Perform Job search

As a User I want to seach available jobs

Scenario: Search Engineer Jobs under Financial Services
Given I open reed.co.uk
When I enter "Engineer" in what Text Field
And I enter "South West London" in where text Field
And I click on Search button
Then Randomly 5 selected results should contain the "Engineer" in the search result page headings
When I selected the Financial Services checkbox
Then The number next to the filter should be equal to the total jobs count after the filter is applied