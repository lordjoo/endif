var db = firebase.firestore();
const course = db.collection("courses")
// Get Courses
course.onSnapshot(function (snapshot) {
    let data = snapshot.docs;
    $("#courses-div").empty();
    data.forEach(course => {
        let ele = `<div class="col-lg-4 col-md-12 mb-md-3 mb-4">
        <!-- Card -->
        <div class="card hoverable">
            <!-- Card image -->
            <img class="card-img-top"
                src="${course.data().photo}"
                alt="Card image cap">
            <!-- Card content -->
            <div class="card-body d-flex flex-row-reverse justify-content-between align-items-center">
                <!-- Title -->
                <a href="/course/${course.data().slug}" class="black-text">
                    ${course.data().name}
                </a>
                `;
                if (firebase.auth().currentUser)
                ele += `
                <a data-id="${course.id}" id="del_course" class="mama-is-here">
                   <i class="fas fa-trash text-danger"></i>
                </a>`;
                ele+=`
            </div>
        </div>
    </div>
`;
$("#courses-div").append(ele);
    });
})

