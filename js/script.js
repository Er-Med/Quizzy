
// Start animatedTitle effect
let topDiv = document.querySelector('.text-top');
let bottomDiv = document.querySelector('.text-bottom');

window.onload = setTimeout(animatedDiv(),2000);
function animatedDiv(){
  topDiv.style.width = "100%";
  topDiv.style.borderBottomRightRadius = "20px";
  bottomDiv.style.width = "100%";
  bottomDiv.style.borderTopRightRadius = "20px";
}
// End animatedTitle effect

// Start dark mode
let modeBtn = document.querySelector('#mode');

modeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
      document.documentElement.style.setProperty('--main-color', '#333') ;
      document.documentElement.style.setProperty('--span2-color', '#b0652f') ;
      document.documentElement.style.setProperty('--bottom-div-color', '#fff') ;
    }else{
  document.documentElement.style.setProperty('--main-color', '#fff');
  document.documentElement.style.setProperty(' --span2-color', '#000') ;
  document.documentElement.style.setProperty('--bottom-div-color', '#000') ;
};
})
// Start dark mode