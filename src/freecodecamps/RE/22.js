let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|[\d][\d])$/gi; // Change this line
let result = userCheck.test(username);