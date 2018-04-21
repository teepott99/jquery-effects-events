// $('#shadow').click(function(){
//     $(this).hide(2000);
// console.log(this);
// });


$(".red").on("click", function(){
    $(this).fadeOut(3000);
    
    console.log(this);
});
// $('#shadow').show();



$("#signup-form").submit(function(e){
    e.preventDefault();
    console.log("hey: ", $("input"));

    let username = $("input[name='username']").val();
    // console.log("Username is: ", username);
    let password = $("input[name='password']").val();
    // console.log("Password is: ", password);
    // console.log("Your username is " + $("input[name='username']").val());
    if (username === "Ironhack" && password === "ironhack2017") {
        console.log("You are now logged in!");
        $("body").append('<p>You are now logged in!</p>');
    }
});