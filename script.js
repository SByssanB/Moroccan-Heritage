// Basic search functionality
function searchContent() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    alert("Searching for: " + query);
}

// Newsletter Subscription Functionality
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;

    if (email) {
        alert("Thank you for subscribing with " + email + "!");
        document.getElementById("subscribe-form").reset(); // Reset the form
    } else {
        alert("Please enter a valid email address.");
    }
});
