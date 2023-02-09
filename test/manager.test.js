const manager = require("../lib/manager")

test("testing getName function pass",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getName()).toBe("bob")
})

test("testing getId function pass",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getId()).toBe(1)
})

test("testing getEmail function pass",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getEmail()).toBe("bob@gmail.com")
})

test("testing getRole function pass",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getRole()).toBe("Manager")
})

test("testing getOfficeNumber function pass",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getOfficeNumber()).toBe("1")
})

test("testing getName function fail",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getName()).not.toBe("joe")
})

test("testing getId function fail",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getId()).not.toBe("2")
})

test("testing getEmail function fail",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getEmail()).not.toBe("jim@gmail.com")
})

test("testing getRole function fail",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getRole()).not.toBe("employee")
}) 

test("testing getOfficeNumber function fail",()=>{
    const employee = new manager("bob", 1, "bob@gmail.com", "1");
    expect(employee.getOfficeNumber()).not.toBe("jithub")
})