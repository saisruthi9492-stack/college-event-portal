// Registration Form Validation

const form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const department = document.getElementById("department").value.trim();
        const year = document.getElementById("year").value;
        const selectedEvent = document.getElementById("event").value;

        const message = document.getElementById("message");

        if (
            name === "" ||
            email === "" ||
            mobile === "" ||
            department === "" ||
            year === "" ||
            selectedEvent === ""
        ) {
            message.innerHTML = "Please fill all required fields.";
            message.style.color = "red";
            return;
        }

        if (mobile.length !== 10 || isNaN(mobile)) {
            message.innerHTML = "Please enter a valid 10-digit mobile number.";
            message.style.color = "red";
            return;
        }

        message.innerHTML =
            "Registration successful! Thank you, " +
            name +
            ". You registered for " +
            selectedEvent +
            ".";

        message.style.color = "green";

        form.reset();
    });
}


// Dynamic Announcement

function changeAnnouncement() {

    const announcement =
        document.getElementById("announcementText");

    if (announcement) {
        announcement.innerHTML =
            "New update: Hackathon registration has been extended!";
    }
}