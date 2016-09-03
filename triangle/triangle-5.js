/**

Write a program to display below triangle: consider user input as 15

+
++
+++
++++
+++++
++++++
+++++
++++
+++
++
+

*/

var i, j, n = 15, k;
for(i = 0; i < n; i++) {
  for(j = 0; j < i - 1; j++) {
    if(j < n - i) {
      process.stdout.write('+');
    } else {
      process.stdout.write(' ');
    }
  }
  process.stdout.write('\n');
}
