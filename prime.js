function prime(num){
 let count=0;

for(let i=2;i<=num;i++)
{
if(num%i==0){
count++;}
}
if(count==1){
console.log(num,"is prime)}


prime(13)