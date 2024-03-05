import { styled } from "styled-components";

const StyledListItems = styled.li`
  display: flex;
  gap: 1rem;
`;

export default function Comments({ slug, comments, onDeleteComment }) {
  return (
    <ul>
      {comments &&
        comments.map((comment) => (
          <StyledListItems key={comment.id}>
            <p>{comment.comment}</p>
            <p>{comment.date}</p>
            <p onClick={() => onDeleteComment(slug, comment.id)}>X</p>
          </StyledListItems>
        ))}
    </ul>
  );
}
