/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var buttonElement = document.getElementById("title-button");
var elementsArray = document.getElementsByTagName("h1");
var element = elementsArray[0];

 var myVar = false;


buttonElement.addEventListener("click", function () {
       
    if (myVar) {
        
        buttonElement.classList.remove("bordered-text");
           element.classList.remove("bordered-text");
          element.style.color = null;
          buttonElement.style.color = null;
        myVar=false;
      
    }

    else  {
            
        element.style.color = "yellow";
        element.classList.add("bordered-text");
        buttonElement.classList.add("bordered-text");
        buttonElement.style.color = "yellow";
        
        myVar=true;
    }

});


