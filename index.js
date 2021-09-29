var birthday= document.querySelector("#birthday");
var luckyNo= document.querySelector("#luckyNo");
var btn= document.querySelector("#submit-btn");
var result= document.querySelector("#result");

btn.addEventListener("click", ()=>{
  event.preventDefault();

  var sum=0

  for(var i=0; i<birthday.value.length; i++){
    if(birthday.value[i]!= "-"){
      sum += parseInt(birthday.value[i])
    }
  }
  console.log(luckyNo.value)
    console.log(sum)
    console.log(luckyNo.value % sum);
  if( sum %luckyNo.value ==0){
    result.style.display="block";
    result.innerText= "Wohooo! You are Lucky"
  }else{
    result.style.display="block";
    result.innerText= "Oh No! You are not Lucky"
  }
});
