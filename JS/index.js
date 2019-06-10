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
let Images =
[
"./Images/0.jpg",
"./Images/1.jpg",
"./Images/2.jpg",
"./Images/3.jpg",
"./Images/4.jpg",
"./Images/5.jpg",
"./Images/6.jpg",
"./Images/7.jpg",
"./Images/8.jpg",
"./Images/9.jpg",
"./Images/10.jpg",
"./Images/11.jpg",
"./Images/12.jpg"
]
let count = 0;
function Next(){
  count++;
  $(".Main_Img").attr("src",Images[count]);
  if(count == Images.length){
      count = 0;
  }
}
function Prev(){
    count--;
    $(".Main_Img").attr("src",Images[count]);
    if(count == 0){
      count = Images.length;
    }
}
setInterval(Next,5000);
$(".Next").on("click",Next);
$(".Previous").on("click",Prev);
