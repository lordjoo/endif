// to fix the trash-can for the admin and non-admins

firebase.auth().onAuthStateChanged(function (user) {
    let interval;
    if (user)    {
        interval = setInterval(()=>{
            $("body").find(".mama-is-here").css("display","block")
        },100);
    } else {
        clearInterval(interval);
        $("body").find(".mama-is-here").css("display","block")

    }
})