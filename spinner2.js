const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-'];
let delayTime = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delayTime);
  delayTime += 100;
}