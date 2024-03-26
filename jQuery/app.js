//Manipulating css
$("h1").css("color", greeen)
$("h1").addClass(".bid-title")

//Update text
$("h1").text("Bye")

//Manipulating Attributes
console.log($("img").attr("src")); //getting attribute
$("a").attr("href", "https://www.amazonprime.com"); //setting attribute

//Adding EventListener
$("h1").click(function () {
    $("h1").css("color", "purple")
})

$("button").click(function () {
    $("h1").css("color", "purple");
}) 

/* note: in qQuery there is no need for for loop because by selecting for button,
jQuery will look through your websites and select asll of the buttons, 
and if combine that with a click method then it will add this click listner to all the buttons 
that it finds without you having to go through it using for loop */

//instead of
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "purple";
    })
}
//Capturing input
$("input").keydown(function(event){
    console.log(event.keydown);
})

$("input").keydown(function(event){
    $("h1").text(event.keydown)
})

//other method for eventlistner
$("h1").on("mousehover",function(){
    $("h1").css("color","purple")
})

//Adding and removing elements with jQuery
$("h1").before("<button>New<button>") //will add a button before h1
$("h1").after("<button>New<button>") //will add a button after h1
$("h1").prepend("<button>New<button>") //add your new HTML element into the item that you've selected just after the opening tag.
//in other words
/* <h1>
    <button>New</button>//prepend
    Hello
    <button>New</button>//append
</h1> */