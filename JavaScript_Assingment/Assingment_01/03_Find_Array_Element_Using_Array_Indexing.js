var X = [10,20,true,"Web Development",3.14];

for(let i = 0;i <= X.length-1;i++)
{
    if(X[i] == X[X.length-2])
    {
        console.log(X[i]);
        break;
    }
}