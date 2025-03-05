// Select all the filter buttons and cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// The function that handles the filtering
const filterCards = (e) => {
    // Remove 'active' class from all buttons
    document.querySelector(".filter_buttons .active").classList.remove("active");

    // Add 'active' class to the clicked button
    e.target.classList.add("active");

    // Loop through all the cards and show/hide based on the selected category
    filterableCards.forEach((card) => {
        card.classList.add("hide"); // Hide all cards initially
        // Show the card if it matches the selected filter or if 'all' is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

// Add event listeners to each filter button
filterButtons.forEach((button) => button.addEventListener("click", filterCards));
