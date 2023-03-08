var Arr = [12,56,755,27,16,2,1104,65,88];

for(let i = 0;i < Arr.length;i++)
{
     if(Arr[i] % 3 == 0 && Arr[i] % 8 == 0)
    {
        console.log(`${Arr[i]} Is Divisible By Both ${3} And ${8}`);
    }
    else if(Arr[i] % 3 == 0)
    {
        console.log(`${Arr[i]} Is Divisible By ${3}`);
    }
    else if(Arr[i] % 8 == 0)
    {
        console.log(`${Arr[i]} Is Divisible By ${8}`);
    }
    else 
    {
        console.log(`${Arr[i]} Not Divisible By Both ${3} And ${8}`);
    }
}