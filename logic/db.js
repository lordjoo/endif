var db = firebase.firestore();

// add course 
$("#add_course_btn").click(async function () {
   $("#add_course_btn").attr("disabled",true);
   let c_name = $("#name").val(); 
   
   // Upload File
   let fileUpload = document.querySelector("#photo")
   let firstFile  = fileUpload.files[0];
   let storageRef = firebase.storage().ref().child('courses/'+c_name+firstFile.name);
   let uploadTask = await storageRef.put(firstFile)
   let file_url  = await uploadTask.ref.getDownloadURL();
   let slug = c_name.toLowerCase().replace(" ","-");
   // add db 
   db.collection("courses").add({
       name:c_name,
       photo:file_url,
       slug:slug
   }).then((res)=>{
      $("#add_course_btn").attr("disabled",false);
      $("#addCourse").modal("hide")
   }).catch( _ => {
       alert("Fuck You There is an error");
   })

});

$(document).on("click","#del_course",function () {
    let id = $(this).attr("data-id");
    db.collection("courses").doc(id).delete();
});


