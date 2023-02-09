const intern = require("../lib/intern")

test("testing getName function pass",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getName()).toBe("bob")
})

test("testing getId function pass",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getId()).toBe(1)
})

test("testing getEmail function pass",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getEmail()).toBe("bob@gmail.com")
})

test("testing getRole function pass",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getRole()).toBe("Intern")
})

test("testing getSchool function pass",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getSchool()).toBe("UTA")
})

test("testing getName function fail",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getName()).not.toBe("joe")
})

test("testing getId function fail",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getId()).not.toBe("2")
})

test("testing getEmail function fail",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getEmail()).not.toBe("jim@gmail.com")
})

test("testing getRole function fail",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getRole()).not.toBe("employee")
}) 

test("testing getSchool function fail",()=>{
    const employee = new intern("bob", 1, "bob@gmail.com", "UTA");
    expect(employee.getSchool()).not.toBe("jithub")
})