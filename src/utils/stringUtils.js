export function getFirstLetters(string, limit) {
    const words = string.split(" ");
    const letters = [];

    for (let i = 0; i < limit && i < words.length; i++) {
        letters.push(words[i].charAt(0).toUpperCase());
    }

    return letters;
}
