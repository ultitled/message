document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const typedText = document.getElementById("typedText");

    const message = "My dearest Naekkeo❤️,\n\n You stood by me when the world felt heavy and my heart was broken. In those darkest moments, you were my light, my safe place, the one who made me believe in hope again. Because of you, I found the courage to open up, to share my deepest emotions — something I never thought I could do.\n I see you not just as my best friend, but as the person I want beside me forever. I want to be part of your life in every way — to share your smiles, your dreams, and even your challenges. Yes, sometimes my heart gets jealous when I think of you with someone else, but that only shows how deeply I want you close to me. \n More than anything, I want your happiness. I want to see you smile every day and enjoy your life to the fullest. And I want to be the one who makes those moments special, the one who supports you, loves you, and cherishes you like no one else ever could. \n You are my everything, and I want nothing more than to build a beautiful life with you — together, forever. \n LOVE YOU MOON AND BACK ❤️";
    envelope.addEventListener("click", () => {
        // Shrink & move envelope down
        envelope.style.transform = "scale(0.7) translateY(50px)";
        envelope.style.opacity = "0.5";

        setTimeout(() => {
            // Show letter
            letter.style.display = "block";

            // Start typing effect
            let index = 0;
            function type() {
                if (index < message.length) {
                    typedText.textContent += message.charAt(index);
                    index++;
                    setTimeout(type, 50); // typing speed
                }
            }
            type();
        }, 1000);
    });

    // Floating hearts generator
    const heartBackground = document.querySelector(".heart-background");
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heartBackground.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    setInterval(createHeart, 300);
});
document.addEventListener("click", function() {
    document.getElementById("bgMusic").play();
}, { once: true });
