const ServerData = [
    {name: "Test 01",Age: 20, Address: "Demo 01"},
    {name: "Test 02",Age: 21, Address: "Demo 02"},
    {name: "Test 03",Age: 22, Address: "Demo 03"}
];

function AddData(Getobject){

    return new Promise((resolve,reject) => {
            setTimeout(() => {
                ServerData.push(Getobject);
                let error = false;
                if(!error) {
                    console.log("Data Added Successfully !!");
                    resolve();
                }
                else{
                    reject("Data Not Added !!!");
                }
            },1000);
        })
    }

    function getData(){
        setTimeout(() => {
            let Str ="";
            ServerData.forEach((Values) => {
                Str = `Person Name: ${Values.name} and his age is ${Values.Age}`;
                console.log(Str);
            } )
        },2000);
    }

    let AddNewObject = {name: "WEBx86 Infotech",Age: 52,Address: "Dubai"};

    AddData(AddNewObject).then(getData).catch(error => console.log(error));
