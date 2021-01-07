const firebaseConfig = {
    apiKey: "AIzaSyCEkOGM9Pplf6qKxApsd3-nXn8qcDWIKCk",
    authDomain: "end-if.firebaseapp.com",
    projectId: "end-if",
    storageBucket: "end-if.appspot.com",
    messagingSenderId: "94687648542",
    appId: "1:94687648542:web:014d28a13ebdd91a19070f",
    measurementId: "G-5Z64K4KY26"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (location.hostname === "localhost") {
    //firebase.firestore().useEmulator("localhost", 8080);
    //console.log("Running Firebase Firestore Emulator");
}

firebase.auth().onAuthStateChanged(function(user) {
    let interval;
    if (user)    {
        interval = setInterval(()=>{
            $("body").find(".mama-is-here").css("display","block")
        },100);
    } else {
        clearInterval(interval);
        $("body").find(".mama-is-here").css("display","block")

    }
    
});
