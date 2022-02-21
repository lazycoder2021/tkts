window.addEventListener('DOMContentLoaded', function () {
    var db = firebase.firestore(); 

    db.collection('tickets').get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            console.log(data)

            data.forEach((d) => {
                document.querySelector('.ticketsContainerBody').innerHTML += `
                <div class="compName comp">
                    <p>${d.cName}</p>
                </div>
                <div class="compType comp">
                    <p>${d.cType}</p>
                </div>
                <div class="compStatus comp">
                    <p>${d.cStatus}</p>
                </div>
                <div class="compHelpdesk comp">
                    <p>${d.cHelpdesk}</p>
                </div>
                <div class="compSeverity comp">
                    <p>${d.cSeverity}</p>
                </div>
                <div class="actions comp" data-id=${d.id}>
                    <span class="editBtn"><a href="edit.html?id=${d.id}">Edit</a></span>
                    <span class="delBtn">Delete</span>
                </div>
            
            `;

                document.querySelectorAll('.delBtn').forEach((del) => {
                    del.addEventListener('click', function (e) {
                        alert('clicked')
                        var recordId = e.target.parentElement.getAttribute('data-id');
                        db.collection('tickets').doc(`${recordId}`).delete();
                    })
                })
                    
            })

            
        })
})
