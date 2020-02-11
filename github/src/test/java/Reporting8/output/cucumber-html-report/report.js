$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:cucumber12/cucu.feature");
formatter.feature({
  "name": "Test Calculator",
  "description": "This file describe calculator functionally",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Write a number",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter 50 in calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber12.stepdefination.I_Enter_50_in_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber12.stepdefination.I_press_equal_symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result should be 50 on screen",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber12.stepdefination.Then_result_should_be_50_on_screen()"
});
formatter.result({
  "status": "passed"
});
});