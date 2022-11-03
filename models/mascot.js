module.exports = function cheers(cheerName) {
  switch (cheerName) {
    case 'RED HOT':
      return "H-O-T!";
    case 'DO IT AGAIN':
      return 'Go, Fight, Win';
    case '2 BITS':
      return 'Holler!';
    case 'STOMP YOUR FEET':
      return 'STOMP!'
    default:
      return cheerName;
  }
}
