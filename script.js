const decreasePVR = [
    "Acetylcholine", "Isoproterenol", "Nitric Oxide", "PGE1", "Prostacyclin (PGI2)", "Bradykinin"
];

const increasePVR = [
    "NE", "Epi", "⍺-Adrenergic agonists", "PGF2⍺", "PGE2", "Thromboxane", "Endothelin",
    "Angiotensin", "Histamine", "Alveolar", "Hypoxia", "Hypercapnia", "Low pH of mixed venous blood"
];

let currentTopic = '';
let currentCategory = '';

function generateNewTopic() {
    resetGame();
    const categories = ["INCREASE PVR", "DECREASE PVR"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    if (randomCategory === "DECREASE PVR") {
        currentCategory = "DECREASE PVR";
        currentTopic = decreasePVR[Math.floor(Math.random() * decreasePVR.length)];
    } else {
        currentCategory = "INCREASE PVR";
        currentTopic = increasePVR[Math.floor(Math.random() * increasePVR.length)];
    }

    document.getElementById('topic-box').innerText = currentTopic;
}

function resetGame() {
    document.getElementById('topic-box').classList.remove('correct', 'wrong');
    document.getElementById('decrease-btn').classList.remove('correct', 'wrong');
    document.getElementById('increase-btn').classList.remove('correct', 'wrong');
}

document.getElementById('increase-btn').addEventListener('click', () => {
    checkAnswer("INCREASE PVR");
});

document.getElementById('decrease-btn').addEventListener('click', () => {
    checkAnswer("DECREASE PVR");
});

function checkAnswer(selectedCategory) {
    if (selectedCategory === currentCategory) {
        document.getElementById('topic-box').classList.add('correct');
        document.getElementById(getButtonId(currentCategory)).classList.add('correct');
        playSound('correct-sound');
    } else {
        document.getElementById('topic-box').classList.add('wrong');
        document.getElementById(getButtonId(currentCategory)).classList.add('correct');
        document.getElementById(getButtonId(selectedCategory)).classList.add('wrong');
        playSound('wrong-sound');
    }
    document.getElementById('generate-btn').style.display = 'inline-block';
}

function getButtonId(category) {
    if (category === "DECREASE PVR") return 'decrease-btn';
    return 'increase-btn';
}

function playSound(soundId) {
    document.getElementById(soundId).play();
}
