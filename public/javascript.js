$( document ).ready(function() {
// $.get("/api/animals",function(response){
// console.log("data "+ JSON.stringify(response))
// console.log(response[0].name)
// $("#name").text(response[0].name)

})

$("#btn").on("click", function(){

    alert("clicked")
    $.get("/api/animals",function(response){
        console.log(response[0].name)
        
        })

})