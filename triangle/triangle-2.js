/**

Write a program to display below triangle: consider user input as 10

++++++
+++++
++++
+++
++
+

*/

var i, j;
for(i = 0; i < 10; i++) {
  for(j = i; j < 10; j++) {
    process.stdout.write('+');
  }
  process.stdout.write('\n');
}
