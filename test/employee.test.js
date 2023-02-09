const Employee = require("../lib/employee")

test("testing getName function pass",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getName()).toBe("bob")
})

test("testing getId function pass",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getId()).toBe(1)
})

test("testing getEmail function pass",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getEmail()).toBe("bob@gmail.com")
})

test("testing getRole function pass",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getRole()).toBe("Employee")
})

test("testing getName function fail",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getName()).not.toBe("joe")
})

test("testing getId function fail",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getId()).not.toBe("2")
})

test("testing getEmail function fail",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getEmail()).not.toBe("jim@gmail.com")
})

test("testing getRole function fail",()=>{
    const employee = new Employee("bob", 1, "bob@gmail.com");
    expect(employee.getRole()).not.toBe("engineer")
}) 