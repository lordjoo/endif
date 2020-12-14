$("#login-form").on("submit",function (event) {
    event.preventDefault();
    let email = $("#inputEmail").val();
    let pass = $("#inputPassword").val();
    $(this).find('button').attr("disabled",true)
    firebase.auth().signInWithEmailAndPassword(email, pass).then((user) => {
        // redirect to dashboard
        $(".alerts").empty().append(`<div class="alert alert-success">Welcome Back</div>`)
        setTimeout(function () {
            window.location.assign('/admin/');
        },1000);
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // display error
        // let el = '<div class="alert alert-danger">'+errorMessage+'</div>';
        $(".alerts").empty().append(`<div class="alert alert-danger">${errorMessage}</div>`)
        $(this).find('button').attr("disabled",false)
    });

})

async function logOut() {
    await firebase.auth().signOut(); // await the function to finish
}
$("#signOut-btn").click(async function (e) {
    e.preventDefault();
    await logOut();
})