/**

Write a program to display below triangle: consider user input as 10

+
++
+++
++++
+++++
++++++

*/

var i, j;
for(i = 0; i < 10; i++) {
  for(j = -1; j < i; j++) {
    process.stdout.write('+');
  }
  process.stdout.write('\n');
}
