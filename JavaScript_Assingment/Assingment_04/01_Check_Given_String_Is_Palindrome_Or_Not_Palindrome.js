let Str = "123454321";
let i , j;
for( i = 0, j = (Str.length-1);i < j;i++,j--)
{
    if(Str[i] != Str[j])
    {
        break;
    }
}

if(i < j)
{
    console.log(`Given String => ${Str} Is Not Palindrome!!!`);
}
else
{
    console.log(`Given String => ${Str} Is Palindrome!!!`);
}