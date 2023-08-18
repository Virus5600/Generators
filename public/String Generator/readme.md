<h1 align="center">String Generator</h1>

Generates random strings based on provided input

## Purpose?

I don't know? Use it for passwords? Probably for random usernames? I won't be held accountable on what
illegal stuff you might be able to do with this however. 😒

## How to modify?

I really don't know what you'll modify but in order to modify this generator, you must edit the `index.html`
and `scripts/index.js`.


#### Important points to remember when changing the `index.html`:

- A validator is present in the DTR and has feedbacks. the `data-validation` attributes from the `small` HTML elements identifies what field they belong.

#### Important points to remember when changing the `scripts/index.js`:

- If you add new fields, make sure to validate them to prevent error.
- Validations have two (2) inputs with their own objects.
	- `rules` contains all the rules for a given field.
		- Contains the **name key** and **rule array**
		- **Name Key** is the `name` attribute of the input field
		- **Rule Array** holds a list of rules from the `Rule` class of `Validator` module
	- `message` identifies what validation message will be presented when that particular rule failed.
		- Contains three (3) components, namely the **name key**, **rule key**, and the **rule message**.
		- **Name Key** is the `name` attribute of the input field. This key must be similar to the **name key** from the `rules`.
		- **Rule Key** is one of the rules provided in the **rule array** from `rules`.
		- **Rule Message** is a value for the **rule key**, which will then be displayed on a provided validation message element when the rule test failed.
- Various event listeners are defined in the `$(document).ready()` function. These listeners allow other inputs to work or provide further real-time validation.