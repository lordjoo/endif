var db = firebase.firestore();
(async _ => {
    var slug = window.location.pathname.split('/')[2];
    let course = await db.collection("courses").where("slug",'==',slug).get()
    if (!course.size) {
        window.location.assign("/notfound")
    }
    let c = course.docs[0].data();
    $("#c_name").text(c.name)
    $("#c_photo").css("background-image",`url('${c.photo}')`);
    $("#c_add_lesson").attr("href","/admin/addLesson/"+course.docs[0].id).removeClass("disabled");
    db.collection("lessons").where("course_id","==",course.docs[0].id)
        .onSnapshot(function (snap) {
            
        });
})();