# Mutators

Mixin for get/set object mutator behavior


## Useage

```js
var extend = require('extend');
var Mutators = require('mutators');

// creates object with get/set functions
var person = extend({}, Mutators);

// set an object attribute
person.set('name', 'bill');

// get an object attribute
log(person.get('name'))
```

## Methods

_Methods are defined with the expectation that they will be extended into an instance or prototype of an object.  They won't work as static functions._

### get(property)

Returns the value of object property.

```js
person.get('name')
```

### set(property, value)

Defines a key-value pair on context object. Multiple key-value pairs can be defined by passing an object.

```js
person.set('name', 'bill');
```
