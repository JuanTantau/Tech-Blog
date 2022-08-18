async function newFormHandler(event) {
    event.preventDefault();
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
        title,
        post_text
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
}
}
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);