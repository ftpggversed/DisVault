// JavaScript can be used for more advanced features like filtering bots, voting, and handling dynamic content.
// Placeholder for future JavaScript code.
// Example: Adding event listeners, handling form submissions, etc.

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded!");
    document.addEventListener("DOMContentLoaded", function() {
        const bots = [
            {
                img: "bot1.epng",
                name: "Bot 1",
                description: "Moderation, Fun, Utility",
                categories: ["moderation", "fun", "utility"],
                link: "#"
            },
            {
                img: "bot2.png",
                name: "Bot 2",
                description: "Music, Moderation",
                categories: ["music", "moderation"],
                link: "#"
            },
            // Add more bot objects as needed
        ];
    
        const botList = document.getElementById("bot-list");
        const searchInput = document.getElementById("search-input");
        const categorySelect = document.getElementById("category-select");
    
        function displayBots(filteredBots) {
            botList.innerHTML = "";
            filteredBots.forEach(bot => {
                const botItem = document.createElement("div");
                botItem.classList.add("bot-item");
    
                botItem.innerHTML = `
                    <img src="${bot.img}" alt="${bot.name}">
                    <h3>${bot.name}</h3>
                    <p>${bot.description}</p>
                    <a href="${bot.link}" class="bot-link">View Details</a>
                `;
    
                botList.appendChild(botItem);
            });
        }
    
        function filterBots() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categorySelect.value;
    
            const filteredBots = bots.filter(bot => {
                const matchesSearch = bot.name.toLowerCase().includes(searchTerm) || bot.description.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === "all" || bot.categories.includes(selectedCategory);
                return matchesSearch && matchesCategory;
            });
    
            displayBots(filteredBots);
        }
    
        // Initial display
        displayBots(bots);
    
        // Event listeners
        searchInput.addEventListener("input", filterBots);
        categorySelect.addEventListener("change", filterBots);
    });
    document.addEventListener("DOMContentLoaded", function() {
        const bots = [
            {
                img: "bot1.png",
                name: "Bot 1",
                description: "Moderation, Fun, Utility",
                link: "#"
            },
            {
                img: "bot2.png",
                name: "Bot 2",
                description: "Music, Moderation",
                link: "#"
            },
            // Add more bot objects as needed
        ];
    
        const botList = document.getElementById("bot-list");
    
        bots.forEach(bot => {
            const botItem = document.createElement("div");
            botItem.classList.add("bot-item");
    
            botItem.innerHTML = `
                <img src="${bot.img}" alt="${bot.name}">
                <h3>${bot.name}</h3>
                <p>${bot.description}</p>
                <a href="${bot.link}" class="bot-link">View Details</a>
            `;
    
            botList.appendChild(botItem);
        });
    });
});