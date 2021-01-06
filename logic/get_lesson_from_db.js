var db = firebase.firestore();

(async _ => {
    var slug = window.location.pathname.split('/')[2];
    let lesson = await db.collection("lessons").doc(slug).get()
    if (!lesson.data()) {
        window.location.assign("/notfound")
    }
    let c = lesson.data();
    let c_id = lesson.id;
    
    $("#lesson-name").text(c.name);
    $("#lesson-content").html(c.html);
})();