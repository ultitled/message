document.getElementById("closeDialog").addEventListener("click", function() {
    document.getElementById("dialog").style.display = "none";
    document.getElementById("content").style.display = "block";
});

document.getElementById("surpriseBtn").addEventListener("click", function() {
    window.location.href = "letter.html";
});
document.addEventListener("click", function() {
    document.getElementById("bgMusic").play();
}, { once: true });
