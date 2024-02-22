// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["dog", "cat", "rabbit", "bird", "turtle"];
const verbs = ["ran", "jumped", "flew", "hopped", "swam"];
const adjectives = ["happy", "sad", "big", "small", "funny"];
const nouns2 = ["ball", "stick", "hat", "car", "house"];
const settings = ["park", "beach", "forest", "mountain", "city"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions */
function displayWord(word, element) {
    element.textContent = word;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function noun1_on_click() {
    choosenNoun1.textContent = getRandomElement(nouns1);
}

function verb_on_click() {
    choosenVerb.textContent = getRandomElement(verbs);
}

function adjective_on_click() {
    choosenAdjective.textContent = getRandomElement(adjectives);
}

function noun2_on_click() {
    choosenNoun2.textContent = getRandomElement(nouns2);
}

function setting_on_click() {
    choosenSetting.textContent = getRandomElement(settings);
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in the ${choosenSetting.textContent}.`;
    storyDisplay.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1.textContent = getRandomElement(nouns1);
    choosenVerb.textContent = getRandomElement(verbs);
    choosenAdjective.textContent = getRandomElement(adjectives);
    choosenNoun2.textContent = getRandomElement(nouns2);
    choosenSetting.textContent = getRandomElement(settings);
    playback_on_click();
}

// Function to dynamically add student ID/name
function addStudentInfo() {
    const studentIdParagraph = document.getElementById("studentId");
    studentIdParagraph.textContent = "Student ID/Name: YourName";
}

/* Event Listeners */
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);

// Call the function to add student information
addStudentInfo();
