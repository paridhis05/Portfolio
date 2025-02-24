const words = ["Designer", "Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord = words[i].substring(0, j);
            j++;
        } else if (isDeleting && j >= 0) {
            currentWord = words[i].substring(0, j);
            j--;
        }

        typingElement.textContent = currentWord;

        let speed = isDeleting ? 100 : 200;

        if (!isDeleting && j === words[i].length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            if (i === words.length) {
                i = 0;
            }
        }

        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

// ----------- Skills --------------
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%";
    });
});


// ----------- Project --------------
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Get selected category
            const category = this.getAttribute("data-category");

            // Show/hide projects based on category
            projectItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });
});


