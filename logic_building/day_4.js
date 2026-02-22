// 1. Palindrome check ("madam" → true, "hello" → false)

// 4. Longest word in sentence
// 5. Object manipulation (students data)

function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("Madam"));   // true ✅
console.log(isPalindrome("RaceCar")); // true ✅
console.log(isPalindrome("Hello"));   // false ✅

// 2. Count words in "hello world from pakistan" → 4
function countWord(str){
    let word = str.trim();
    if(word === "") return 0
    let words = word.split(" ").filter((word)=> word !== "");
    return words.length;
};
console.log(countWord("hello world from pakistan"));


// 3. Title case "hello world" → "Hello World"

// . String ko words mein todo (split by space)
// 2. Har word ka first letter capital banao
// 3. Baaki letters small rakho
// 4. Words ko wapas jod do (join)

let str = "hello world"
function titleCase(str){
      let word = str.split(" ");
      let result = []
      for(let i=0; i < word.length; i++){
        let words = word[i];
        let title = words[0].toUpperCase() + words.slice(1).toLowerCase();
        result.push(title)
      };
      return result
    
}
console.log(titleCase(str));
