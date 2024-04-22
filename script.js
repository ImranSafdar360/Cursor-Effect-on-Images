const element = document.querySelectorAll(".elem");
// const img = document.querySelector(".image");

element.forEach(function (val) {
 val.addEventListener(
    "mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    }
 )
 val.addEventListener(
    "mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    }
 )
 val.addEventListener(
    "mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px";
        // val.childNodes[3].style.top = dets.y+"px"; 
    }
 )
})




// element.addEventListener(
//     "mousemove", function(dets){
//         img.style.left = dets.x+"px";
//         img.style.top = dets.y+"px";
//     }
// )
// element.addEventListener(
//     "mouseenter", function(){
//         img.style.opacity = 1;
//     }
// )