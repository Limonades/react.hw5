import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  render() {
    const { title, author, text, year, addedClass } = this.props;
    return (
      <article className={addedClass}>
        <h2 className="title">{title}</h2>
        <h3 className="author">
          from {author}, {year}
        </h3>
        <p>{text}</p>
      </article>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

Post.defaultProps = {
  addedClass: 'user-post',
};

export default Post;
