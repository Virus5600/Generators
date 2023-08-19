<h1 align="center">The Hub</h1>

The Hub contains all the directories towards all the sub-applications. It acts as the central gateway
towards them and all sub-applications return towards here.

## Contents

As of now, the contents of **The Hub** are two (2) sub-applications under the **"Generator"** categories.

## How to add a sub-application?

#### Adding a new Category

Adding a category is as simple as inserting an element in HTML thanks to the script created by the developer.

1) Insert a `<app-category>` element into the area where you want the new category to appear.
2) Add the parameters of the category. See list below of available parameters:
	- **`data-category`** - Defines the category name of the area.
	- **`data-add-class`** - Behaves similar to a `class` attribute, allowing insertion of custom classes to the container.

#### Adding a new Sub-Application

Here's the one you're probably looking for... but do note that this will not work if not placed within `<app-category>` elements.

1) Insert a `<sub-application>` element inside the `<app-category>` element you wish to be a part of.
2) Add the parameters of the sub-application. Each has their own default values to prevent `undefined` from popping all over your work.
	- **`data-title`** - Defines the title of the sub-application. Defaults to *"Sub-Application"*.
	- **`data-desc`** - Defines the description of the sub-application. Defaults to *"A sub-application"*.
	- **`data-img`** - Defines the icon the sub-application will use. Defaults to Generator App's icon.
	- **`data-link`** - Defines the relative link to access the sub-application will use. Defaults to Generator App's *The Hub* page.

Here's an example of a new sub-application inside a new category:
```html
<app-category data-category="Generator" data-add-class="my-3">
	<sub-application
		data-title="String Generator"
		data-desc="Generates random strings"
		data-img="String Generator/assets/favicon.png"
		data-link="String Generator/index.html"
		/>
</app-category>
```

***NOTE:*** Adding an external link isn't prohibited but this might prevent users from going back to *The Hub* as they may or may not have a link going back to it.