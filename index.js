// // Code your solutions in this file
// function writeCards(names) {
//     let messages = [];
//     for (let i = 0; i < names.length; i++) {
//       messages.push(`Thank you, ${names[i]}, for the wonderful gift!`);
//     }
//     return messages;
//   }
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Example usage:
const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

  
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  // let names = ['Alice', 'Bob', 'Charlie'];
  // let thankYouMessages = writeCards(names);
  // console.log(thankYouMessages);
  
  countDown(5);

  function writeCards1(ahmed) {
    let messages = [];
    for (let i = 0; i < ahmed.length; i++) {
      messages.push(`Thank you, ${ahmed[i]}, for the wonderful gift!`);
    }
    return messages;
  }
  