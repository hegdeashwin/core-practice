/**

Write a program to display below triangle: consider user input as 10

+++++
 ++++
  +++
   ++
    +

*/

var i, j, n = 10;
for(i = 0; i < n; i++) {
  for(j = 0; j < n; j++) {
    if (j > i - 1) {
      process.stdout.write('+');
    } else {
      process.stdout.write(' ');
    }
  }
  process.stdout.write('\n');
}
