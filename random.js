//Empty email generator function
function generateEmail(
  emailNameLength,
  includeLowercase,
  includeUppercase,
  includeNumbers
) {
  //using if to construct charecter
  let characters = "";
  if (includeLowercase === true) {
    characters += "abcdefghijklmnopqrstuvwxwz";
  }
  if (includeUppercase === true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers === true) {
    characters += "0123456789";
  } else {
    console.log("Warning: Some type of symbols should be selected!!!");
  }

  //we finding random strings
  let newCharacters = "";
  for (let i = 0; i < emailNameLength; i++) {
    newCharacters += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return newCharacters;
}

//we passing options when we generate our email
const emailNameLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;

const email = generateEmail(
  emailNameLength,
  includeLowercase,
  includeUppercase,
  includeNumbers
);

console.log(`Generated email: ${email}@bit.lt`);
