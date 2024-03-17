var rollV, nameV, genderV, addressV;

function readForm() {
    rollV = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
}

document.getElementById("insert").onclick = function() {
    readForm();

    firebase.database()
        .ref("student/" + rollV)
        .set({
            rollNo: rollV,
            name: nameV,
            gender: genderV,
            address: addressV,
        });
    alert("Data Inserted");
    clearForm();
};

document.getElementById("read").onclick = function() {
    readForm();

    firebase.database()
        .ref("student/" + rollV)
        .on("value", function(snap) {
            if (snap.exists()) {
                document.getElementById("roll").value = snap.val().rollNo;
                document.getElementById("name").value = snap.val().name;
                document.getElementById("gender").value = snap.val().gender;
                document.getElementById("address").value = snap.val().address;
            } else {
                alert("Data not found");
            }
        });
};

document.getElementById("update").onclick = function() {
    readForm();

    firebase.database()
        .ref("student/" + rollV)
        .update({
            name: nameV,
            gender: genderV,
            address: addressV,
        });
    alert("Data Updated");
    clearForm();
};

document.getElementById("delete").onclick = function() {
    readForm();

    firebase.database()
        .ref("student/" + rollV)
        .remove();
    alert("Data Deleted");
    clearForm();
};

function clearForm() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
}