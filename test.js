function TestRunner() {

    // Create person class
    var Person = ClassFactory.create({
        init: function () {
            this.firstName = null;
            this.lastName = null;
        },
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    });

    // Create employee class that extends Person
    var Employee = ClassFactory.extend(Person, {
        getFullName: function () {
            return 'Employee Override: ' + Person.prototype.getFullName.call(this);
        }
    });

    // create person instance
    var person = new Person({
        firstName: 'Timmy',
        lastName: 'Jones'
    });

    // create employee
    var employee = new Employee({
        firstName: 'James',
        lastName: 'Hammock'
    });

    document.getElementById('results').innerHTML = person.getFullName() + '\n' + employee.getFullName();
}

TestRunner();
document.getElementById('source').innerHTML = TestRunner.toString();