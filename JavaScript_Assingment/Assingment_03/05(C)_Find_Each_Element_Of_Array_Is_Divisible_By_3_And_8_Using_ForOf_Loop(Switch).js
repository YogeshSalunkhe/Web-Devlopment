var Arr = [12,56,755,27,16,2,1104,65,88];

for (let i of Arr) 
{
    switch((( i % 3 == 0 && i % 8 == 0))?1 :( i % 3 == 0)? 2:(i % 8 == 0)? 3:4)
    {
        case 1:
                console.log(`${i} Divisible by ${3} And ${8}`);
                break;
                
        case 2:
            console.log(`${i} Is Divisible By Only ${3}`);
            break;

        case 3:
            console.log(`${i} Is Divisible By Only ${8}`);
            break;

        default:
            console.log(`${i} Is Not Divisible By Both ${3} And ${8}`);
            break;

    }
}