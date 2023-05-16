let number3=document.querySelector('#number3')
let counter3=0;
setInterval(()=>{
    if(counter3==65){
        clearInterval();
    }
    else{
    counter3 +=1;
    number3.innerHTML=counter3 +'%';
    }

},25);

let number4=document.querySelector('#number4')
let counter4=0;
setInterval(()=>{
    if(counter4==65){
        clearInterval();
    }
    else{
    counter4 +=1;
    number4.innerHTML=counter4 +'%';
    }

},25);

let number2=document.querySelector('#number2')
let counter2=0;
setInterval(()=>{
    if(counter2==55){
        clearInterval();
    }
    else{
    counter2 +=1;
    number2.innerHTML=counter2 +'%';
    }

},30);

let number1=document.querySelector('#number1')
let counter1=0;
setInterval(()=>{
    if(counter1==80){
        clearInterval();
    }
    else{
    counter1 +=1;
    number1.innerHTML=counter1 +'%';
    }

},20);






let number=document.querySelector('#number')
let counter=0;
setInterval(()=>{
    if(counter==85){
        clearInterval();
    }
    else{
    counter +=1;
    number.innerHTML=counter +'%';
    }

},20);


