Feature: Test Calculator
This file describe calculator functionally

Scenario: Write a number
Given I enter 50 in calculator
When I press equal symbol
Then result should be 50 on screen

