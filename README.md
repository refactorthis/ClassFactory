# ClassFactory

Simple OOP inheritance implementation for JavaScript

## Example Usage:

```javascript

    // Create person class
    var Person = ClassFactory.create({
        // init is the 'constructor'
        init: function () {
            this.firstName = null;
            this.lastName = null;
        },
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    });

    // create person instance
    var person = new Person({
        firstName: 'Timmy',
        lastName: 'Jones'
    });
```

## Inheritance and overriding methods

```javascript

    // Create employee class that extends Person
    var Employee = ClassFactory.extend(Person, {
        getFullName: function () {
            return 'Employee Override: ' + Person.prototype.getFullName.call(this);
        }
    });

    // create employee
    var employee = new Employee({
        firstName: 'James',
        lastName: 'Hammock'
    });
```
