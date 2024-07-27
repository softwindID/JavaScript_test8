Create a registration page based on the Figma design mockup and link the JavaScript and CSS files to it.

All fonts should be linked to the website and used according to the design mockup.

Once the page layout is complete, use JavaScript to implement the following:

Create an event handler for the full page load and add new code only within this function. Note that in this case, you cannot use the approach of specifying a function in an HTML attribute. Instead, you need to find elements in the JS code and create event handler functions for them.

In the "Full Name" field, prevent the input of numbers.

In the "Your username" field, prevent the input of dots and commas.

When the checkbox value changes, output a corresponding message to the console: “Agreed” or “Not agreed”.

When the “Sign Up” button is clicked:

Check for the presence of a value in each text field. If any field is empty, display an error message using alert. The message should be: "Please fill in the E-mail field".
The password must be at least 8 characters long. If the password is shorter, display an error message through alert.
Check if the passwords in the two text fields match. If the passwords do not match, display an error message using alert.
Check if the checkbox is selected. If the checkbox is not selected, display an error message using alert.
If all checks pass successfully, a popup should appear with the text "A link has been sent to your email. Follow it to complete registration" and an "OK" button. When the "OK" button is clicked, the popup closes, the form is cleared, and the user is redirected to the login page (see point 6). There is no modal window in the mockup; you need to create it yourself, adhering to the general style of the mockup.
When the “Already have an account?” link or the “OK” button in the popup is clicked, simulate navigation to the login page. To achieve this with JavaScript:

Change the text "Get your free account" to "Log in to the system".
Remove the blocks with fields "Full Name", "E-mail", and "Repeat Password".
Remove the checkbox block as well.
Change the button text to "Sign In".
Remove the "Already have an account?" link.
Change the event listener for the "Sign In" button: check that both fields (Username and Password) are filled. If any field is empty, display an error. If both are filled, show an alert message "Welcome, username!", where username is the value from the respective field.
When handling the "Sign Up" button click, you can choose between two approaches:

Make the button in the form type="button" and handle the button click event.
Make the button in the form type="submit" and handle the form submission event, preventing form submission in case of errors.
