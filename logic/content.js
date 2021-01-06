var db = firebase.firestore();
(async _ => {
    var slug = window.location.pathname.split('/')[2];
    let course = await db.collection("courses").where("slug",'==',slug).get()
    if (!course.size) {
        window.location.assign("/notfound")
    }
    let c = course.docs[0].data();
    let c_id = course.docs[0].id;
    $("#c_name").text(c.name)
    $("#c_photo").css("background-image",`url('${c.photo}')`);
    $("#c_add_lesson").attr("href","/admin/addLesson/"+c_id)
    $("#c_add_lesson").removeClass("disabled");
    db.collection("lessons").where("course_id","==",c_id)
        .onSnapshot(function (snapshot) {
            let data = snapshot.docs;
            $("#lessons-div").empty();
            data.forEach(lesson => {
               let ele = `<div class="col-md-3 mb-2">
                            <a href="/lesson/${lesson.id}">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="h5 orange-text text-darken-4">${lesson.data().name}</p>
                                    </div>
                                </div>
                            </a>
                        </div>`;
                        $("#lessons-div").append(ele);
            });
        });
})();