document.getElementById('loadBtn').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }
    document.getElementById('webView').src = url;
});
