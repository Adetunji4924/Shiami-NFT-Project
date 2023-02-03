let likeCount = document.getElementById("like-count");
console.log(likeCount)

let count = 0

function likeButton() {
    count += 1
    likeCount.textContent = count
}