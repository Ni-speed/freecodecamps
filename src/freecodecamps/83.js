let count = 0;
//let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    return count + ' Bet';
  // case 7:
  // case 8:
  // case 9:
  //   count = 0;
  //   break
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
    break;
} 
  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }

  //return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');