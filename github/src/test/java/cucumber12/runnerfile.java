package cucumber12;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin =	{"json:src/test/java/Reporting8/output/cucumber.json"})
	

public class runnerfile {

}
