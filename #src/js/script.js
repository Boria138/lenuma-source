const accordion = document.getElementsByClassName("accordion_header");

for(i = 0; i<accordion.length; i++){
  accordion[i].addEventListener("click", function(e){
    let CurrentElement = e.target.closest(".accordion_header");
    let CurrentnContent = CurrentElement.nextElementSibling;
    CurrentElement.classList.toggle("active");
    if(CurrentElement.classList.contains("active")){
      CurrentnContent.style.maxHeight = CurrentnContent.scrollHeight + "px";
    }else{
      CurrentnContent.style.maxHeight = 0;
    }
  })
}
