document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    // Display loading indicator
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<p>Analyzing image, please wait...</p>';

    fetch('https://api.example.com/analyze', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Display the analysis result
            resultContainer.innerHTML = `
                <h3>Disease Detected: ${data.diseaseName}</h3>
                <p>${data.description}</p>
                <p><strong>Treatment Methods:</strong> ${data.treatmentMethods}</p>
            `;
        } else {
            resultContainer.innerHTML = `<p>Analysis failed: ${data.message}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultContainer.innerHTML = '<p>An error occurred during the analysis. Please try again.</p>';
    });
});
