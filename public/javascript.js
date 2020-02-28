$( document ).ready(function() {
alert("welcome")
})

$("#btn").on("click", function(){

    alert("clicked")
    $.get("/api/animals",function(response){
        console.log(response[0].name)
        
        })

})