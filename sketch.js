let character;
let phrases = ["Hello!", "How are you?", "What's up?", "Goodbye!"];
let currentPhrase = "";

function setup() {
    createCanvas(800, 600);
    // Create character sprite
    character = new Sprite(width / 2, height / 2 + 50, 50, 50);
    character.color = 'blue';
    textSize(18);
}
function draw() {
    background(220);

    // Draw character
    character.draw();

    // Display chat bubble with current phrase above the character
    drawChatBubble(character.x, character.y - 60, currentPhrase);

    // Display phrase options
    displayOptions();
}
// Function to draw the chat bubble
function drawChatBubble(x, y, textContent) {
    fill(255);
    stroke(0);
    rectMode(CENTER);
    let bubbleWidth = 200;
    let bubbleHeight = 50;
    rect(x, y, bubbleWidth, bubbleHeight, 20);

    fill(0);
    textAlign(CENTER, CENTER);
    text(textContent, x, y);
}
// Function to display selectable phrase options
function displayOptions() {
    fill(0);
    textAlign(LEFT);
    text("Choose what to say:", 50, height - 150);
    for (let i = 0; i < phrases.length; i++) {
        text(`${i + 1}: ${phrases[i]}`, 50, height - 120 + i * 30);
    }
}
// Handle key presses to select phrases
function keyPressed() {
    let index = int(key) - 1;
    if (index >= 0 && index < phrases.length) {
        currentPhrase = phrases[index];
    }
}