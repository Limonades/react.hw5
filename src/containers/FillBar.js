import React from 'react';

class FillBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      year: '',
      author: '',
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearBar = this.clearBar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'title') {
      this.setState({
        title: value,
      });
    }

    if (name === 'year') {
      this.setState({
        year: value,
      });
    }

    if (name === 'author') {
      this.setState({
        author: value,
      });
    }

    if (name === 'text') {
      this.setState({
        text: value,
      });
    }
  }

  clearBar() {
    this.setState({
      text: '',
      year: '',
      author: '',
      title: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createArticle } = this.props;
    const { year, author, title, text } = this.state;

    const newArticle = {
      id: Date.now(),
      year: +year,
      author,
      title,
      text,
      addedClass: 'user-post',
    };

    createArticle(newArticle);

    this.clearBar();
  }

  render() {
    const { title, author, text, year } = this.state;
    return (
      <aside className="sidebar">
        <h2 className="sidebar__title">Add the article</h2>
        <form className="sidebar__form" onSubmit={this.handleSubmit}>
          <label htmlFor="nameField">
            Movie title
            <input
              id="nameField"
              onChange={this.handleChange}
              className="name-field"
              value={title}
              name="title"
              required
            />
          </label>
          <label htmlFor="authorField">
            Director
            <input
              id="authorField"
              onChange={this.handleChange}
              className="author-field"
              value={author}
              name="author"
              // required
            />
          </label>
          <label htmlFor="yearField">
            Year
            <input
              id="yearField"
              onChange={this.handleChange}
              className="year-field"
              value={year}
              name="year"
              /* type="number"
                            min='1900' max='2018' */
              // required
            />
          </label>
          <div>
            Short Desription
            <textarea
              onChange={this.handleChange}
              className="text-field"
              value={text}
              name="text"
              // required
            />
          </div>
          <button type="button" className="form-btn">
            save
          </button>
        </form>
        <div className="hover-txt">hover me</div>
      </aside>
    );
  }
}

export default FillBar;
