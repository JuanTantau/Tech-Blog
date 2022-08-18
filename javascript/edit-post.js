async function editFormHandler(event) {
    event.preventDefault();
    // edits post
const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
}
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);