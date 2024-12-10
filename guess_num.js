let original_num = Math.random() * 100;
original_num = Number.parseInt(original_num);   
let user_num;
let score = 100;

while(user_num!=original_num){
    score = score-1;
    user_num = prompt("enter number:");
   
if (user_num==original_num){
    console.log("congratulation! you guess the correct number");
    console.log(`you guess the actual number in ${100-score} chances`);
}
else if(user_num>original_num && user_num<100){
    alert("your number is greater than the actual number");
}else if(user_num<original_num && user_num>0){
    alert("your number is smaller than the actual number");
}else{
    alert("enter a number between 1 to 100");
    }
}