const Engineer = require("../lib/engineer")

test("testing getName function pass",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getName()).toBe("bob")
})

test("testing getId function pass",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getId()).toBe(1)
})

test("testing getEmail function pass",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getEmail()).toBe("bob@gmail.com")
})

test("testing getRole function pass",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getRole()).toBe("Engineer")
})

test("testing getGitHub function pass",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getGitHub()).toBe("github")
})

test("testing getName function fail",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getName()).not.toBe("joe")
})

test("testing getId function fail",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getId()).not.toBe("2")
})

test("testing getEmail function fail",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getEmail()).not.toBe("jim@gmail.com")
})

test("testing getRole function fail",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getRole()).not.toBe("employee")
}) 

test("testing getGitHub function fail",()=>{
    const employee = new Engineer("bob", 1, "bob@gmail.com", "github");
    expect(employee.getGitHub()).not.toBe("jithub")
})