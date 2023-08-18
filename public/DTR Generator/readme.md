<h1 align="center">DTR Generator</h1>

Helps generate a DTR easily.

## DTR Template

As of now, the DTR Generator uses a fixed template based on our workspace.
There is a plan however, to create a templating script to allow users to create their own
DTR template in which they could also export the template as a file and upload it for later
use or for sharing.

## How to change the Template

To change the template, ~~one must~~ the source code of `index.html` and `scripts/index.js` will be change.

#### Important points to remember when changing the `index.html`:

- ***Job Order*** is the list of employees you wish to create a DTR for.
- ***Period*** identifies the date range of the DTR. *(i.e.: August 1-15, 2023)*
- ***Days*** determines how many days the employee worked within the given `period`.
- ***Saturdays*** determines how many saturdays the employee worked within the given `period`.
- ***Verifier*** is the name of the person in charge.
- ***Verifier Position*** is the position of the person in charge.
- ***Dates*** identifies an array of dates the workers generally worked. You don't really need to modify this unless necessary.
<br>

- The input fields' name are used for identfying which place they will be inserted.
- The HTML attributes `data-dtr-*` identifies what field will go in that place. See previous point.
- A validator is present in the DTR and has feedbacks. the `data-validation` attributes from the `small` HTML elements identifies what field they belong.
- All generated DTRs are tested in A4 and Letter paper sizes only.

#### Important points to remember when changing the `scripts/index.js`:

- The `prefix` constant identifies what the data-attribute prefix is used in the DTR module.
- The `dataAttr` constant identifies where the values for the DTR will be fetched. This is in-line
with the `data-dtr-*` point from earlier.
- `DTR` constant is an object which has all the DTR related functions.
	- **`DTR.list`** holds the uploaded employee list for use down the line.
	- **`DTR.displayContent`** is an event based function. It is used primarily when the list of employee is uploaded.
	- **`DTR.preview`** is a function which generates a preview for the DTR without the input fields. This is primarily tied with the `[name="dates[]"]`'s `onclick` event.
	- **`DTR.reset`** resets the entire preview, allowing for a fresh one to be appended.
	- **`DTR.validate`** is called prior to generating the DTR. This function ensures that all necessary fields are filled
	- **`DTR.generate`** has three uses:
		- **Generate** creates the final preview of the DTR.
		- **Tutorial Generate** inserts a sample DTR that is generated during development.
		- **Tutorial Generate End** removes the sample DTR which ends the tutorial.
	- **`DTR.print`** calls the print functionality of the application and renders the finalized DTR for printing.
	- **`DTR.generateTutorial`** is the one responsible for two (2) of the three (3) functions of `DTR.generate`; namely the **Tutorial Generate** and **Tutorial Generate End**.
- `TUTORIAL` constant is an object which has all the Tutorial related functions. This particular object is currently experimental but will soon be moved to the global scope.
	- **`TUTORIAL.components`** holds all the target components for the Tutorial. It is composed of the key *(a CSS ID selector)* and another object, which holds the tutorial data. The position of the component in the object identifies their index as well.
		- ***#key*** - Identifies what element will be highlighted once the tutorial starts.
		- ***title*** - Identifies the title of the popover for the tutorial.
		- ***content*** - Identifies what instruction or content will be displayed in the popover for this tutorial.
		- ***callbackInit*** - A callback function that will be called prior to the highlighting of the given component.
		- ***callbackEnd*** - A callback function that will be called prior to the end of tutorial for the given component.
	- **`TUTORIAL.index`** determines what component is currently being highlighted in the tutorial.
	- **`TUTORIAL.previous`** provides the last highlighted component in the tutorial. The value it bears is the `#key` of the said element.
	- **`TUTORIAL.previousPopover`** provides the last popover used. This is primarily used to clean up the popover and prevent multiple instances of those popovers from existing.
	- **`TUTORIAL.instantiated`** defines whether the tutorial has started or not. This prevents unexpected behaviors from itself.
	- **`TUTORIAL.init`** initializes the Tutorial Singleton. It also prepares the entire page for the Tutorial such as adding the backdrop and removing them if they still exists.
	- **`TUTORIAL.iterate`** is used to highlight the targeted elements for the tutorial. Popover instances for the tutorial are also created here.
	- **`TUTORIAL.next`** cleans all the changes the previous iteration made, including the popover.
	- **`TUTORIAL.end`** prepares the entire page to end the tutorial. It resets all the variable to its initial state prior to the start of tutorial.