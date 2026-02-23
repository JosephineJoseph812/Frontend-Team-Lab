function showMessage() {
    const message = document.createElement("p");
    message.textContent = "Welcome to Version 2 🚀";
    message.style.color = "darkblue";
    message.style.textAlign = "center";

    document.body.appendChild(message);
    alert("Welcome to Version 1 🚀");
}

function getAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

function calculateAge() {
    const g1 = document.getElementById("girl1").value;
    const g2 = document.getElementById("girl2").value;
    const result = document.getElementById("result");

    if (!g1 || !g2) {
        result.innerHTML = "⚠️ Please select both dates.";
        return;
    }

    const age1 = getAge(g1);
    const age2 = getAge(g2);

    result.innerHTML =
        `👧 First girl age: ${age1} years<br>
         👧 Second girl age: ${age2} years`;
}