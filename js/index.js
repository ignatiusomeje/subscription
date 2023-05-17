const words = `We'll periodically import and store your contacts to suggest connections and show you relevant updates. You control who you
connect to and you can manage your contacts anytime`;
let count = 0;
const typingArea = document.querySelector(".typing-space p");
function typingIn() {
  const wordsLength = words.length;
  if (count < wordsLength) {
    typingArea.textContent += words.charAt(count);
    count++;
    setTimeout(() => typingIn(), 200);
  } else {
    typingOut();
  }
}
function typingOut() {
  if (count >= 0) {
    typingArea.textContent = words.slice(0, count);
    count--;
    setTimeout(() => typingOut(), 200);
  } else {
    typingIn();
  }
}
typingIn();
