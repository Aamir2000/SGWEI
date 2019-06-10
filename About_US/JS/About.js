$(".mobile_bar").on("click",(e)=>{
  $(".Menu").toggle("slow");
});
$(window).on("resize",(e)=>{
  if(window.innerWidth >= 801){
    $(".Menu").show();
  }
  else{
    $(".Menu").hide();
  }
});

$(".History_Button").on("click",(e)=>{
  $(".History_Growth").toggle("slow");
});
