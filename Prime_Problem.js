let num1 =7;
let count = 0;
for (let i = 2; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log('Yes'+" "+num' '+'is prime');
} 
else {
  console.log('NO'+" "+num+' '+'is not prime');
}