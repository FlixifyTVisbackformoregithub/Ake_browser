document.getElementById('loadBtn').addEventListener('click', function() {
    const url = document.getElementById('url').value;

    // Validate URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }
    
    // Update the iframe to load the URL
    document.getElementById('webView').src = url;
});
