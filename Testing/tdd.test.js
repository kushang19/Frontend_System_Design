const isPalindrome = require("./tdd");

test("// abc -> false", () => {
    const result = isPalindrome("abc");
    expect(result).toBe(false)
})
test("// aabaa -> true", () => {
    const result = isPalindrome("aabaa");
    expect(result).toBe(true)
})
test("// 123 -> false", () => {
    const result = isPalindrome(123);
    expect(result).toBe(false)
})
test("// 121 -> true", () => {
    const result = isPalindrome(121);
    expect(result).toBe(true)
})
test("empty -> null", () => {
    const result = isPalindrome();
    expect(result).toBe(null)
})
test("single char -> true", () => {
    const result = isPalindrome("a");
    expect(result).toBe(true)
})

test("Negative Number -121 -> true", () => {
    const result = isPalindrome(-121);
    expect(result).toBe(true)
})

test("Input other than no and str -> null", () => {
    const result = isPalindrome({});
    expect(result).toBe(null)
})

test("Input > 10 -> MAX LIMIT", () => {
    const result = isPalindrome("abcdefghijklmnopqrstuvwxyz");
    expect(result).toBe("MAX LIMIT")
})
test(" '   madam   ' ->  true", () => {
    const result = isPalindrome('   madam   ');
    expect(result).toBe(true)
})

