import { BasePage } from "./BasePage";

class NewRegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.NameInput = page.getByPlaceholder('#name');
        this.EmailInput = page.getByPlaceholder('#email');
        this.PasswordInput = page.getByPlaceholder('#password');
        this.javaScriptCheckBox = page.getByText('JAVA', { exact: true });
        this.seleniumCheckBox = page.getByText('Selenium', { exact: true });
        this.maleRadioButton = page.getByText('Male', { exact: true });
        this.femaleRadioButton = page.getByText('Female', { exact: true });
        this.stateSelection=page.locator('//select[@name="state"]');
        this.hobbiesSelection=page.locator('//select[@name="hobbies"]');
        this.submitButton = page.getByRole('button', { name: 'Sign up' });
    }
        async fillRegistrationForm() {
        
        
        
        
        
        
        }

}