document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value.trim();

    if (postText) {
        const postsContainer = document.getElementById('postsContainer');
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = postText;

        postsContainer.prepend(postElement);
        postInput.value = ''; // Clear the input
    } else {
        alert('Please enter a message.');
    }
});
