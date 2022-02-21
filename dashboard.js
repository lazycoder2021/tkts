var db = firebase.firestore();
var num = 22;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['In Progress', 'On Hold', 'Request for Info', 'Completed' ],
        datasets: [{
            label: 'USER COMPLAINTS',
            data: [`${num}`, 19, 6, 5 ],
            backgroundColor: [
                'dodgerblue',
                'red',
                'orange',
                'green',
                
            ],
            borderColor: [
                '',
                '',
                '',
                '',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
