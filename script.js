// ================= SETTINGS =================

function openSettings() {
    document.getElementById("settingsModal").style.display = "flex";
}

function closeSettings() {
    document.getElementById("settingsModal").style.display = "none";
}


// ================= LOGIN =================

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}


// ================= DARK MODE =================

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("change", function () {

    if (darkMode.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

});


// ================= IT TERMS =================

const termSearch = document.getElementById("termSearch");
const termCards = document.querySelectorAll(".term-card");
const termsButton = document.getElementById("termsButton");

let termsExpanded = false;


// Show first terms when page loads

function updateTerms() {

    const search = termSearch.value.toLowerCase().trim();

    // If searching
    if (search !== "") {

        let found = false;

        termCards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(search)) {

                card.style.display = "block";
                found = true;

            } else {

                card.style.display = "none";

            }

        });

        // Show message if nothing was found

        let message = document.getElementById("termNoResults");

        if (!message) {

            message = document.createElement("p");
            message.id = "termNoResults";
            message.className = "no-results";

            termSearch.parentElement.insertAdjacentElement(
                "afterend",
                message
            );

        }

        if (!found) {

            message.textContent =
                "We can't find what you're searching for.";

            message.style.display = "block";

        } else {

            message.style.display = "none";

        }

        termsButton.style.display = "none";

        return;
    }


    // Remove search result message

    const message = document.getElementById("termNoResults");

    if (message) {
        message.style.display = "none";
    }


    // Normal View More / View Less mode

    termCards.forEach(function (card, index) {

        if (termsExpanded) {

            card.style.display = "block";

        } else {

            if (index < 24) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        }

    });

    termsButton.style.display = "block";

    if (termsExpanded) {

        termsButton.textContent = "View Less";

    } else {

        termsButton.textContent = "View More";

    }

}


// Search event

termSearch.addEventListener("input", function () {
    updateTerms();
});


// View More / View Less

termsButton.addEventListener("click", function () {

    termsExpanded = !termsExpanded;

    updateTerms();

});


// Run once when page loads

updateTerms();


// ================= CODE BASICS =================

const codeSearch = document.getElementById("codeSearch");
const codeCards = document.querySelectorAll(".code-card");
const codeButton = document.getElementById("codeButton");

let codeExpanded = false;


// Show first code examples when page loads

function updateCode() {

    const search = codeSearch.value.toLowerCase().trim();


    // If searching

    if (search !== "") {

        let found = false;

        codeCards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(search)) {

                card.style.display = "block";
                found = true;

            } else {

                card.style.display = "none";

            }

        });


        // Create no-result message

        let message = document.getElementById("codeNoResults");

        if (!message) {

            message = document.createElement("p");
            message.id = "codeNoResults";
            message.className = "no-results";

            codeSearch.parentElement.insertAdjacentElement(
                "afterend",
                message
            );

        }


        if (!found) {

            message.textContent =
                "We can't find what you're searching for.";

            message.style.display = "block";

        } else {

            message.style.display = "none";

        }

        codeButton.style.display = "none";

        return;
    }


    // Hide search message

    const message = document.getElementById("codeNoResults");

    if (message) {
        message.style.display = "none";
    }


    // Normal View More / View Less mode

    codeCards.forEach(function (card, index) {

        if (codeExpanded) {

            card.style.display = "block";

        } else {

            if (index < 18) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        }

    });


    codeButton.style.display = "block";


    if (codeExpanded) {

        codeButton.textContent = "View Less";

    } else {

        codeButton.textContent = "View More";

    }

}


// Search event

codeSearch.addEventListener("input", function () {
    updateCode();
});


// View More / View Less

codeButton.addEventListener("click", function () {

    codeExpanded = !codeExpanded;

    updateCode();

});


// Run once when page loads

updateCode();


// ================= LOGIN FORM =================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const message =
        document.getElementById("loginMessage");

    message.textContent =
        "Welcome, " + username + "!";

});


// ================= CLOSE MODALS =================

window.addEventListener("click", function (event) {

    const settingsModal =
        document.getElementById("settingsModal");

    const loginModal =
        document.getElementById("loginModal");

    if (event.target === settingsModal) {
        closeSettings();
    }

    if (event.target === loginModal) {
        closeLogin();
    }

});
