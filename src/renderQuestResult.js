export const renderQuestResult = choice => {
    const result = document.createElement('article');

    const resultText = document.createElement('p');
    resultText.textContent = choice.result;
    result.appendChild(resultText);

    result.appendChild(document.createElement('br'));

    const choiceConse = choice.consequences;
    for (const key in choiceConse) {
        const stat = key;
        const change = choiceConse[key];
        const consequence = document.createElement('p');
        consequence.textContent = stat + ': ' + change;
        result.appendChild(consequence);
    }
    return result;
};