import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  handleClick = () => {
    const { id, handleRemove } = this.props;
    handleRemove(id);
  };

  render() {
    const { title, author, text, year, addedClass } = this.props;
    return (
      <article className={addedClass}>
        <h2 className="title">{title}</h2>
        <h3 className="author">
          from {author}, {year}
        </h3>
        <p>{text}</p>
        <button onClick={this.handleClick} className="btn-close" type="button">
          Remove
        </button>
      </article>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  addedClass: PropTypes.string,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Post.defaultProps = {
  addedClass: null,
};

export default Post;
