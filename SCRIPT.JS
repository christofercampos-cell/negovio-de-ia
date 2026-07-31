const likeBtn = document.getElementById("likeBtn");
const likes = document.getElementById("likes");

let curtido = false;
let total = 0;

likeBtn.addEventListener("click", function () {

    if (curtido) {
        curtido = false;
        total--;
        likeBtn.textContent = "🤍";
    } else {
        curtido = true;
        total++;
        likeBtn.textContent = "❤️";
    }

    likes.textContent = total;

});