/**

Write a program to display below triangle: consider user input as 10

    +
   ++
  +++
 ++++
+++++

*/

var i, j, n = 10;
for(i = 2; i < n; i++) {
  for(j = 0; j < n; j++) {
    if(j > (n - i)) {
      process.stdout.write('+');
    } else {
      process.stdout.write(' ');
    }
  }
  process.stdout.write('\n');
}
