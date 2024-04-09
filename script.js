const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const resultDiv = document.getElementById("results-div")


function telephoneCheck(str) {
    const filter = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return filter.test(str);
}

clearBtn.addEventListener('click', function() {
    resultDiv.textContent = ""
    userInput.value = ""
})

checkBtn.addEventListener('click', () => {
    console.log(`clicked! input: ${userInput.value}`);
    if (userInput.value === "") {
        alert('Please provide a phone number');
        return
    }
    telephoneCheck(userInput.value) ?
        resultDiv.textContent += `Valid US number: ${userInput.value}        `:
        resultDiv.textContent += `Invalid US number: ${userInput.value}      `;
});


