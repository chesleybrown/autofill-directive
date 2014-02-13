autofill-directive
==================

AngularJS directive that fixes the issue where browsers autofill inputs and they aren't reflective in the model upon submit.

#### Install with Bower:

```
bower install autofill-directive
```

#### Include the directive in your Angular module:

```
var myApp = angular.module('myApp', ['autofill-directive']);
```

## Usage

Use the `autofill-submit` directive on the form that you are submitting and provide the angular expression you want executed. Then place the `autofill` directive on any inputs that may be autofilled by the browser. Now the `model` will be updated to reflect what the browser has autofilled into the input BEFORE the submit expression is executed.

```html
<form autofill-submit="login()">
	<input autofill ng-model="username" placeholder="Username" type="text" />
	<input autofill ng-model="password" placeholder="Password" type="password" />
	<input type="submit" value="Login" />
</form>
```
