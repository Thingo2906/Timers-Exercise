function countdown(num){
    let number = setInterval(function(){
        num --;
        if(num ===0){
        clearInterval(number);
        console.log("DONE!");
        }
        else{
            console.log(num);
        }



    }, 1000)
}
