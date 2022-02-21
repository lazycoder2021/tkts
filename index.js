const firebaseConfig = {
    apiKey: "AIzaSyD7l0aFmc8uT-Qf69JZTNP_TyDPXpS4XKc",
    authDomain: "practiceapp-46afd.firebaseapp.com",
    projectId: "practiceapp-46afd",
    storageBucket: "practiceapp-46afd.appspot.com",
    messagingSenderId: "861951030501",
    appId: "1:861951030501:web:0da7deaee5b37b2e62900c"
};

firebase.initializeApp(firebaseConfig)

var db = firebase.firestore(); 

document.querySelector('.ticketBtn').addEventListener('click', function () {
    document.querySelector('.ticketForm').classList.toggle('hide');
})



document.querySelector('.save').addEventListener('click', function (e) {
    e.preventDefault(); 
    alert('submitting details...')

    db.collection('tickets').add({
        cName: document.querySelector('.cName').value, 
        cEmail: document.querySelector('.cEmail').value, 
        cType: document.querySelector('.cType').value, 
        cStatus: document.querySelector('.cStatus').value, 
        cHelpdesk: document.querySelector('.cHelpdesk').value, 
        cSeverity: document.querySelector('.cSeverity').value
    })


    console.log(cName, cEmail, cType, cStatus, cHelpdesk, cSeverity)
})

document.querySelector('.update').addEventListener('click', function (e) {
    e.preventDefault();
    alert('submitting details...')

    db.collection('tickets').doc('lXWGOgD2MvpMNVWAPpRC').set({
        cName: document.querySelector('.cName').value,
        cEmail: document.querySelector('.cEmail').value,
        cType: document.querySelector('.cType').value,
        cStatus: document.querySelector('.cStatus').value,
        cHelpdesk: document.querySelector('.cHelpdesk').value,
        cSeverity: document.querySelector('.cSeverity').value
    })


    console.log(cName, cEmail, cType, cStatus, cHelpdesk, cSeverity)
})


