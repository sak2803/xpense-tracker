var date=document.getElementById('date');
var breakfast=document.getElementById('breakfast');
var lunch=document.getElementById('lunch');
var tea=document.getElementById('tea');
var dinner=document.getElementById('dinner');
var others=document.getElementById('others');
const submitBtn=document.getElementById('submitBtn');
const sumDaily=document.getElementById('sumDaily');
const todaySum=document.getElementById('todaySum');


const senOne=document.getElementById('senOne');
const senTwo=document.getElementById('senTwo');
const senThree=document.getElementById('senThree');
const senFour=document.getElementById('senFour');
const senFive=document.getElementById('senFive');
const senSix=document.getElementById('senSix');

const items=[{}];


/*submitBtn.addEventListener('click',()=>{
    senOne.innerHTML=breakfast.value;
    senTwo.innerHTML=lunch.value;
    senThree.innerHTML=tea.value;
    senFour.innerHTML=dinner.value;
    senFive.innerHTML=others.value;
    senSix.innerHTML=Number(breakfast.value) + Number(lunch.value) + Number(tea.value) ;
}) */

function sumAdd(){
    var sum=0;
    sum = Number(sum) + Number(breakfast.value) + Number(lunch.value)
    + Number(tea.value) + Number(dinner.value) + Number(others.value);
    senFive.innerHTML=sum;
    todaySum.innerHTML="Today's sum = " + sum

    
    /*const sumDaily={date:sum}
    items.push(sumDaily)
    senOne.innerHTML=items*/

}
submitBtn.addEventListener('click',sumAdd);
