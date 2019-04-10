/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myVar = false;

//$("#title2").css("color","yellow");
$("#title2-button").click(function(){
    
    if (myVar) {
        
//       border-style: solid;
//    border-color: black;
       $(this).css('border-style','solid');
        $(this).css('border-color','black');
        $("#title2").css("color",'inherit');
        myVar=false;
      
    }

    else  {
           
        $(this).css('border-style','transparent');
        $(this).css('border-color','transparent');
        $("#title2").css("color","yellow");
        myVar=true;
    }
});


$(document).ready(function(){
     
  $("#title3-button").click(function(){
    $(".open-sign2-image").animate({left: '1000px'});
    $(".open-sign2-image").css('border-radius','50%');
  });
  });
