function answer(){
    
    let p=document.getElementById("input1").value;
    let r=document.getElementById("input2").value;
    let t=document.getElementById("input3").value;
    let a=(p*r*t)/100

    console.log((p*r*t)/100)
    alert(a)
}
document.getElementById("btn").addEventListener("click",answer);

// document.getElementById("btn").style.backgroundColor="blue"
// document.getElementById("btn").style.Color="blue"
// document.getElementById("input1").style.backgroundColor="blue"
// document.getElementById("input2").style.backgroundColor="blue"
// document.getElementById("input3").style.backgroundColor="blue"
