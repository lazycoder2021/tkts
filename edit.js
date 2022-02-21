window.addEventListener('DOMContentLoaded', function () {
    var db = firebase.firestore();


    const params = window.location.search;
    const id = new URLSearchParams(params).get('id')
    var complaintId = id;

    db.collection('tickets').doc(`${complaintId}`).get()
        .then((doc) => {
            if (!doc.exists)
                return

                document.querySelector('.uName').value = doc.data().cName,
                document.querySelector('.uEmail').value = doc.data().cEmail,
                document.querySelector('.uType').value = doc.data().cType,
                document.querySelector('.uStatus').value = doc.data().cStatus,
                document.querySelector('.uHelpdesk').value = doc.data().cHelpdesk,
                document.querySelector('.uSeverity').value = doc.data().cSeverity
            
        })

})

var db = firebase.firestore();
const params = window.location.search;
const id = new URLSearchParams(params).get('id')
var complaintId = id;

document.querySelector('.uDetails').addEventListener('click', function (e) {
    e.preventDefault()
    alert('Update successful')
    db.collection('tickets').doc(`${complaintId}`).set({
        cName: document.querySelector('.uName').value, 
        cEmail: document.querySelector('.uEmail').value,
        cType: document.querySelector('.uType').value,
        cStatus: document.querySelector('.uStatus').value,
        cHelpdesk: document.querySelector('.uHelpdesk').value,
        cSeverity: document.querySelector('.uSeverity').value
    })

})
