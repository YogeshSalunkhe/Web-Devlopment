var Arr = [12,56,755,27,16,2,1104,65,88];
var i = 0;

while(i < Arr.length)
{
    switch(((Arr[i] % 3 == 0 && Arr[i] % 8 == 0))?1 :(Arr[i] % 3 == 0)? 2:(Arr[i] % 8 == 0)? 3:4)
    {
        case 1:
                console.log(`${Arr[i]} Divisible by ${3} And ${8}`);
                break;
                
        case 2:
            console.log(`${Arr[i]} Is Divisible By Only ${3}`);
            break;

        case 3:
            console.log(`${Arr[i]} Is Divisible By Only ${8}`);
            break;

        default:
            console.log(`${Arr[i]} Is Not Divisible By Both ${3} And ${8}`);
            break;

    }
    i++;
}