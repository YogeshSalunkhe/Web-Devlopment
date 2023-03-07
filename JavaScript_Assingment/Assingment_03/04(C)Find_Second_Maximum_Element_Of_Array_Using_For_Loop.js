const Num = [12,58,65,85,35,75,6,24];
var max = 0,Smax = 0;

for(let i = 0;i < Num.length;i++)
{
    if(Num[i] > max)
    {
        max = Num[i];
    }
}
for(let i = 0; i< Num.length;i++)
{
    if(Num[i] > Smax && Num[i] != max)
    {
        Smax = Num[i];
    }
}
console.log(`Maximum Element Of Array = ${max}.`);
console.log(`Maximum Element Of Array = ${Smax}.`);