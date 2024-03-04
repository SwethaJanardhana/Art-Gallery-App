export default function CommentForm({ slug, onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    const comment = data.comment;
    onSubmitComment(slug, comment);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add Comment:</label>
      <input type="text" id="comment" name="comment" required></input>
      <button>Send</button>
    </form>
  );
}
