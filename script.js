function showPunishment() {
    const crime = document.getElementById("crimeSelect").value;
    const punishmentText = document.getElementById("punishment");
    
    const punishments = {
        "lying": "Punishment: Tongue cut off in Naraka (Hell).",
        "stealing": "Punishment: Hands chopped off in Naraka.",
        "cheating": "Punishment: Forced to drink boiling oil.",
        "disrespecting": "Punishment: Burned by flames in Raurava Naraka.",
        "violence": "Punishment: Thrown onto a mountain of spikes.",
        "adultery": "Punishment: Boiled alive in a river of blood.",
        "eating_meat": "Punishment: Transformed into a wild animal in the next life.",
        "betrayal": "Punishment: Torn apart by wild creatures in Naraka."
    };

    if (punishments[crime]) {
        punishmentText.textContent = punishments[crime];
    } else {
        punishmentText.textContent = "Select a crime to receive judgment.";
    }
}
