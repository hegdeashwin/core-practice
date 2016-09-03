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
for(i = 0; i < n/2; i++) {
  for(j = -1; j < i; j++) {
    process.stdout.write('+');
  }
  process.stdout.write('\n');
}
for(j = 0; j < i - 1; j++) {
  for (k = j; k < i - 1; k++) {
    process.stdout.write('+');
  }
  process.stdout.write('\n');
}
