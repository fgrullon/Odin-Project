var prime = 600851475143;
var count = 0;

    for(i = 2; prime != 1; i++)
       {
        if(prime % i === 0)
          {
             prime = prime / i;
             count++;
          }
        }
     console.log("Prime: "+i);
