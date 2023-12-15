function simulateAsyncOperation(callback){
    setTimeout(()=>{
     console.log("Async Operation Completed!");
     callback();
    }, 2000);
}

function handleCallback(){
    console.log('This is the Callback Function!');
}

simulateAsyncOperation(handleCallback);