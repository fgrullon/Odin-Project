var fibo = 1;
var num1 = 1;
var num2 = 1;
var sumatoria = 0;
var limite = 4000000;

while(true)
{
   num1 = num2;
   num2 = fibo;
   fibo = num1 + num2;

 if(fibo < 4000000)
   {
	if(fibo % 2 === 0)
          {
	     sumatoria += fibo;	
          }
   }
 else
 {
	break;
 }  
}

console.log("Sumatoria: "+sumatoria);
