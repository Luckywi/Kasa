
function Tag({ tags }) {
  return (
    <div className="tag-display">
      {tags.map((tag) => (
        <h4 key={tag} className="tag">{tag}</h4>
      ))}
    </div>
  );
}

export default Tag;