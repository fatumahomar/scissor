async function validateUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Global counter variable, I am not storing it in db to ensure faster access and can be reset to last used value if required to be on the safe side.Although the best approach will be to store it in db.
let counter: number = 1;
function randomizeString(customDomain: string, host: any) {
  // Generate 2 random lowercase letters
  const part1: string = Array(2)
    .fill(null)
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join("");

  // Part 2: Increment counter and convert to hex
  const part2: string = counter.toString(16);
  counter++;

  // Assemble parts and return
  if (customDomain.length == 0) {
    return "http://" + host + "/" + part1 + part2;
  }
  return "http://" + customDomain + "." + host + "/" + part1 + part2;
}
export {validateUrl,randomizeString};