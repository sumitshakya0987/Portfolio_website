
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Fetch form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display loading message
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = "Sending your message...";
    statusMessage.style.color = "#a279ff";

    // EmailJS integration
    emailjs
        .send(
            "service_atxvoz5", // Replace with your EmailJS Service ID
            "template_whmlxsv", // Replace with your EmailJS Template ID
            {
                name: name,
                email: email,
                message: message,
            },
            "XmfvVCpzfV6xwcJaz" // Replace with your EmailJS Public Key
        )
        .then(
            (response) => {
                statusMessage.textContent = "Message sent successfully!";
                statusMessage.style.color = "#28a745";
                document.getElementById("contact-form").reset();
            },
            (error) => {
                statusMessage.textContent = "Failed to send the message. Please try again.";
                statusMessage.style.color = "#dc3545";
                console.error("EmailJS error:", error);
            }
        );
});

// contact us
document.getElementById('footer-contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('footer-name').value;
    const email = document.getElementById('footer-email').value;
    const message = document.getElementById('footer-message').value;

    emailjs.send(
        "service_atxvoz5", 
        "template_whmlxsv", 
        { name: name, email: email, message: message },
        "XmfvVCpzfV6xwcJaz"
    )
    .then(() => {
        alert('Your message has been sent successfully!');
        document.getElementById('footer-contact-form').reset();
    })
    .catch((error) => {
        console.error('Failed to send message:', error);
        alert('An error occurred while sending your message. Please try again later.');
    });
});


