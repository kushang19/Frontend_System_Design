function isPalindrome(x){
    if(!x) return null

    if (typeof x === "number"){
        x = Math.abs(x).toString()
    }

    if(typeof x !== "string") return null

    if(x.length === 1) return true

    x = x.toLowerCase().trim()

    if(x.length > 10) return "MAX LIMIT"

    const reverse = x.split("").reverse().join("")

    return x === reverse
};

module.exports = isPalindrome;