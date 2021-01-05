firebase.auth().onAuthStateChanged(function (user) {
    let interval;
    if (user)    {
        interval = setInterval(()=>{
            $("body").find(".mama-is-here").css("display","block")
        },100);
    } else {
        clearInterval(interval);
    }
})