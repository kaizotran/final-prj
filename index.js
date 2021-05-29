const upvoteButtons = document.querySelectorAll(".upvote");
const downvoteButtons = document.querySelectorAll(".downvote");

for (let i = 0; i < upvoteButtons.length; i++) {
    upvoteButtons[i].addEventListener("click", function(e) {
        const scoreSpan = upvoteButtons[i].nextElementSibling;
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
    });
}

for (let i = 0; i < downvoteButtons.length; i++) {
    downvoteButtons[i].addEventListener("click", function(e) {
        const scoreSpan = downvoteButtons[i].previousElementSibling;
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) - 1;
    });
}