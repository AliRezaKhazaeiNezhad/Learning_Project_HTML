$(window).scroll(function(){

    if($(window).scrollTop() >  $("#navbar").height()){
       
        $("#navbar").addClass("navfix");
    }
    else{
        $("#navbar").removeClass("navfix");
    }

})