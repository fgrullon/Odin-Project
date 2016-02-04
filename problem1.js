var sumatoria = 0;

function multiplos(n1, n2, limite)
{
  for(i = 1; i < limite; i++)
  {
    if(i % n1 === 0 || i % n2 === 0)
    {
      sumatoria += i;

    }
  }

  console.log(sumatoria);

}

multiplos(3, 5, 1000);