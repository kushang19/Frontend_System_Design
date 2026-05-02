const sortingByAge = require("./app");

// Jest Expect : https://jestjs.io/docs/expect

test("Testing the sorted data first name to be Aman", ()=>{
    const data = sortingByAge();
    expect(data[0].name).toBe("Aman")
});

test("Testing Length to be 4", ()=>{
    const data = sortingByAge();
    expect(data).toHaveLength(4)
});
test("Testing Undefined keyword", ()=>{
    const a = undefined;
    expect(a).toBeUndefined()
});

