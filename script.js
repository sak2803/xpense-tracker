var date=document.getElementById('date');
var breakfast=document.getElementById('breakfast');
var lunch=document.getElementById('lunch');
var tea=document.getElementById('tea');
var dinner=document.getElementById('dinner');
var others=document.getElementById('others');
const submitBtn=document.getElementById('submitBtn');
const sumDaily=document.getElementById('sumDaily');

items=[];


function dailySum(){
    var sum;
    sum=sum +
    items[i].breakfast +
    items[i].lunch+items[i].tea +
    items[i].dinner +
    items[i].others;
    return sum

}

function submit(){
    date.innerHTML='hi'
    var i=0;
    items[i]={
        date:[breakfast,lunch,tea,dinner,others]
    };
    return 'sumDaily.innerHTML=dailySum';
    i=i+1;
};

submitBtn.addEventListener=onclick(submit())