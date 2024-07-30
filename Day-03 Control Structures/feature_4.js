let score = Math.floor(Math.random() * 100);
switch (score <= 100) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 70:
    console.log("B");
    break;
  case score >= 55:
    console.log("C");
    break;
  case score >= 41:
    console.log("D");
    break;
  case score >= 0:
    console.log("F");
    break;

  default:
    console.log("Invalid score number");
    break;
}
