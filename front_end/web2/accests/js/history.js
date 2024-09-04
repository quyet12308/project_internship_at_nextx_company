document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/history', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    })
    .then(response => response.json())
    .then(data => {
        const historyList = document.getElementById('historyList');

        if (data.success && data.history.length > 0) {
            data.history.forEach(item => {
                const historyItem = document.createElement('div');
                historyItem.classList.add('history-item');

                historyItem.innerHTML = `
                    <img src="${item.imageUrl}" alt="Cassava plant" class="history-thumbnail">
                    <div>
                        <h4>${item.diseaseName}</h4>
                        <p>${new Date(item.date).toLocaleDateString()}</p>
                    </div>
                `;

                historyList.appendChild(historyItem);
            });
        } else {
            historyList.innerHTML = '<p>No history available.</p>';
        }
    })
    .catch(error => console.error('Error:', error));
});
