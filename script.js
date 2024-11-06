const decreasePVR = [
    "Acetylcholine", "Isoproterenol", "Nitric Oxide (NO)", "Prostaglandin E₁ (PGE₁)", "Prostacyclin/Prostaglandin I₂ (PGI₂)", "Bradykinin", "Endothelin-B (ET-B)", "PDE-5 Inhibitor: sildenafil (Viagra)", 
    "PDE-5 Inhibitor: tadalafil (Cialis)", "Prostacyclin Analogue: Epoprostenol (Flolan)", "Prostacyclin Analogue: Epoprostenol (Flolan)", "Prostacyclin Analogue: Iloprost", "Prostacyclin Analogue: Treprostinil", "Endothelin Receptor ANTAGONIST (ERA) w/ high selectivity to Endothelin-A (ET-A)"  
];

const increasePVR = [
    "Norepinephrine", "Epinephrine", "⍺-Adrenergic agonists", "Prostaglandin F₂⍺ (PGF₂⍺)", "Prostaglandin E₂ (PGE₂)", "Thromboxane (TXAg2)", "Endothelin (nonspecific)",
    "Angiotensin", "Histamine", "Alveolar Hypoxia", "Alveolar Hypercapnia", "Low pH of mixed venous blood (Acidic SvO₂)", "Pancuronium", "Nitrous Oxide (N2O)", "Endothelin-A (ET-A)", " "
];

let currentTopic = '';
let currentCategory = '';

function generateNewTopic() {
    resetGame();
    const categories = ["DECREASE PVR", "INCREASE PVR"];
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

document.getElementById('decrease-btn').addEventListener('click', () => {
    checkAnswer("DECREASE PVR");
});

document.getElementById('increase-btn').addEventListener('click', () => {
    checkAnswer("INCREASE PVR");
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
