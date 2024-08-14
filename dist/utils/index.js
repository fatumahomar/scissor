"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = validateUrl;
exports.randomizeString = randomizeString;
async function validateUrl(url) {
    try {
        const response = await fetch(url, { method: "HEAD" });
        return response.ok;
    }
    catch (error) {
        return false;
    }
}
// Global counter variable, I am not storing it in db to ensure faster access and can be reset to last used value if required to be on the safe side.Although the best approach will be to store it in db.
let counter = 1;
function randomizeString(customDomain, host) {
    // Generate 2 random lowercase letters
    const part1 = Array(2)
        .fill(null)
        .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
        .join("");
    // Part 2: Increment counter and convert to hex
    const part2 = counter.toString(16);
    counter++;
    // Assemble parts and return
    if (customDomain.length == 0) {
        return "http://" + host + "/" + part1 + part2;
    }
    return "http://" + customDomain + "." + host + "/" + part1 + part2;
}
