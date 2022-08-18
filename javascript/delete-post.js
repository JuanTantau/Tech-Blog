async function deleteFormHandler(event) {
    event.preventDefault();
        const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
}
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 2
      ];
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

