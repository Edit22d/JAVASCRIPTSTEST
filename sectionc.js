//SECTION C
// 1.
// Write a function to reverse a given string.
function reverseString(str) {
    return str.split("").reverse().join("");
    }
    console.log(reverseString('edith'))

//  2.
    // Implement a function to find the sum of all even numbers in an array.
    function sumEvenNumbers(arr) {
        return arr.filter(num => num % 2 === 0)
        
        }
        console.log(sumEvenNumbers([1, 2, 3, 4, 5]))

// 3.
// Create a function that takes two numbers. If the numbers are the same, return their product. If they are different, return their sum.
function sameOrDifferent(num1, num2) {
    if (num1 === num2) {
        return num1 * num2
        } else {
            return num1 + num2
            }
            }
            console.log(sameOrDifferent(5, 5))

// 4.
// Write a function that checks if a given word is a palindrome.
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
    }
    console.log(isPalindrome('radar'))
    
    

    
