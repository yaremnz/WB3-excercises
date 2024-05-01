

function handleClick(e){
    const dateInput = document.getElementById("dateInput");
    const outputParagraph = document.getElementById("outputParagraph");

    let rawText = dateInput.value;
    let dateObject = new Date(rawText);
    let outputText = dateObject.toString();
    outputParagraph.innerHTML = rawText + "<br><br>" + outputText;
}


function handleLoaded(e){
    const displayButton = document.getElementById("displayButton");
    displayButton.addEventListener("click", handleClick);
}
document.addEventListener("DOMContentLoaded", handleLoaded);