

 async function getEmployeeDetails() {

    console.log('started function getEmployeeDetails');

    var p1 = new Promise( (resolve, reject) => {

        setTimeout (() => {
            resolve("ID: 123, Name: John Doe, Age: 30, Department: Engineering")  
        }, 4000)

    })

    
    var result =  p1.then( (result) => {
        return result;
    });

    
    return result;

} 
    
async function getManagerDetails()  {

    var p2 =  new Promise( (resolve, reject) => {

        setTimeout (() => {
            resolve("ID: 456, Name: Jane Smith, Age: 28, Department: Marketing")  
        }, 2000)

    })


    var result =  p2.then( (result) => {
        return result;
    }   );  

    return result;

}

async function main() {
    
    var e1 = await getEmployeeDetails();
    console.log(e1);
    var m1 = await getManagerDetails();
    console.log(m1);


}

main();

export {};