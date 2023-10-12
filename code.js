"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let name1 = prompt("Enter Your Name");
let score = 0;
function askQuestion(question, correctAnswer) {
    let userAnswer = parseInt(prompt(question));
    if (userAnswer === correctAnswer) {
        console.log("Correct answer");
        score++;
    }
    else {
        console.log(`Wrong answer. The correct answer is ${correctAnswer}`);
    }
}
askQuestion("Q1. What is the capital city of Pakistan? \n 1. Karachi \n 2. Lahore \n 3. Islamabad \n 4. Rawalpindi \n Please enter the number of the correct answer", 3);
askQuestion("Q2. Which mountain range is located in Pakistan and is home to some of the world's highest peaks, including K2? \n 1. Rocky Mountains \n 2. Andes Mountains \n 3. Himalayan Mountains \n 4. Karakoram Mountains \n Please enter the number of the correct answer", 4);
askQuestion("Q3. Which river is the longest in Pakistan? \n 1. Indus River \n 2. Jhelum River \n 3. Chenab River \n 4. Ravi River \n Please enter the number of the correct answer", 1);
askQuestion("Q4. Who is the founder of Pakistan? \n 1. Allama Iqbal \n 2. Liaquat Ali Khan \n 3. Quaid-e-Azam Muhammad Ali Jinnah \n 4. Benazir Bhutto \n Please enter the number of the correct answer", 3);
askQuestion("Q5. Pakistan shares its eastern border with which country? \n 1. Afghanistan \n 2. China \n 3. India \n 4. Iran \n Please enter the number of the correct answer", 3);
askQuestion("Q6. What is the national language of Pakistan? \n 1. Punjabi \n 2. Sindhi \n 3. Urdu \n 4. Pashto \n Please enter the number of the correct answer", 3);
askQuestion("Q7. Which famous archaeological site in Pakistan dates back to the Indus Valley Civilization and is a UNESCO World Heritage site? \n 1. Mohenjo-Daro \n 2. Taxila \n 3. Harappa \n 4. Lahore Fort \n Please enter the number of the correct answer", 1);
askQuestion("Q8. Pakistan became an independent nation on what date? \n 1. August 14, 1947 \n 2. August 15, 1947 \n 3. July 4, 1947 \n 4. June 3, 1947 \n Please enter the number of the correct answer", 1);
askQuestion("Q9. Who is Pakistan's current Prime Minister in September 2023? \n 1. Nawaz Sharif \n 2. Anwar ul Haq Kakar \n 3. Asif Ali Zardari \n 4. Benazir Bhutto \n Please enter the number of the correct answer", 2);
askQuestion("Q10. What is the highest civilian award in Pakistan, often given for outstanding contributions to the country? \n 1. Nishan-e-Pakistan \n 2. Sitara-e-Imtiaz \n 3. Hilal-e-Imtiaz \n 4. Tamgha-e-Shujaat \n Please enter the number of the correct answer", 4);
function calculateGrade() {
    let grade = "";
    if (score >= 8) {
        grade = "A+";
    }
    else if (score >= 6) {
        grade = "A";
    }
    else if (score >= 4) {
        grade = "B";
    }
    else if (score >= 2) {
        grade = "C";
    }
    else {
        grade = "D";
    }
    return grade;
}
var grade = calculateGrade();
console.log(`Dear ${name1}, Your Quiz has been completed. \n Your Score: ${score}/10 \n Your Grade: ${grade}`);
let compliment = "";
switch (grade) {
    case "A+":
        compliment = "Congratulations! You have a great knowledge about Pakistan!";
        break;
    case "A":
        compliment = "Great job! You really know Pakistan well.";
        break;
    case "B":
        compliment = "Good effort! You have a decent knowledge of Pakistan.";
        break;
    case "C":
        compliment = "Not bad, but you can improve your knowledge of Pakistan.";
        break;
    default:
        compliment = "You might want to learn more about Pakistan.";
}
console.log(compliment);
