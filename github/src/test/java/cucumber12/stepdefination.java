package cucumber12;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepdefination {
	
	@Given("I enter 50 in calculator")
	public void I_Enter_50_in_the_calculator() {
		System.out.println("I enter 50 in calculator");
	}
	
	@When("I press equal symbol")
	public void  I_press_equal_symbol() {
		System.out.println("I press equal symbol");
	}
	
	@Then("result should be 50 on screen")
	public void Then_result_should_be_50_on_screen() {
		System.out.println("Then result should be 50 on screen");
	}
}
