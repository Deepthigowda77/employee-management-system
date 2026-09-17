const bcrypt = require("bcryptjs");

const password = "123456";

bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Hashed Password:", hashedPassword);

  // Check correct password
  bcrypt.compare("123456", hashedPassword, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Correct password:", result);
  });

  // Check wrong password
  bcrypt.compare("wrongpassword", hashedPassword, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Wrong password:", result);
  });
});