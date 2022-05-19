let count= 0;
function randomGame(){
    let number= setInterval(function(){
       var num= Math.random();
       count+=1;
       if(num > 0.75){
           clearInterval(number);
           console.log("It took " + count + " time of tries to find the number greater than 0.75.");
       }
       
       else{
           console.log(num);

       }


    }, 1000)
    

}
randomGame();