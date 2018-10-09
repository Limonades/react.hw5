import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/index';

class PostList extends React.Component {
  render() {
    const { cards, handleClick, isHasMore, handleRemove } = this.props;
    return (
      <section>
        {cards.map(post => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            text={post.text}
            year={post.year}
            addedClass={post.addedClass}
            handleRemove={handleRemove}
            id={post.id}
          />
        ))}
        {isHasMore ? (
          <div className="btn-wrap">
            <a onClick={handleClick} href="" className="btn">
              Load more
            </a>
          </div>
        ) : null}
      </section>
    );
  }
}

PostList.propTypes = {
  cards: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  isHasMore: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default PostList;
