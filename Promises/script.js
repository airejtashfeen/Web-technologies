const myPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success= false;
        if(success){
            resolve("Successful Resolution");
        }
        else{
            reject("Error: Operation Failed!")
        }
    }, 2000);
});

myPromise.then((data)=>{
    console.log("Promise resolved:", data);
}). catch((error)=>{
    console.error("Failed", error);
})