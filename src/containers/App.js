import React from 'react';
import articles from '../constants/articles';
import PostList from '../components/PostList/index';
import FillBar from './FillBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: articles,
      cards: articles.slice(0, 2),
      counter: 2,
      isHasMore: true,
    };
  }

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('localData'));

    if (localData.length <= 2) {
      this.setState({ isHasMore: false });
    }

    if (localData) {
      this.setState({ data: localData, cards: localData.slice(0, 2) });
    }
  }

  componentDidUpdate() {
    const { data } = this.state;

    const localData = JSON.parse(localStorage.getItem('localData'));
    const stateData = JSON.stringify(data);
    if (!localData) {
      return localStorage.setItem('localData', stateData);
    }

    if (data.length !== localData.length) {
      localStorage.setItem('localData', stateData);
    }
  }

  handleRemove = e => {
    const { data, counter } = this.state;
    const copyData = data.slice();
    const dataId = [];

    copyData.forEach(a => {
      dataId.push(a.id);
    });

    const index = dataId.indexOf(e);

    copyData.splice(index, 1);

    this.setState({
      data: copyData,
      cards: copyData.slice(0, counter),
    });

    this.checkArticlesCount();
  };

  handleClick = e => {
    e.preventDefault();
    const { counter, data } = this.state;
    const step = counter + 2;

    this.setState({
      cards: data.slice(0, step),
      counter: step,
    });

    this.checkArticlesCount();
  };

  createArticle = article => {
    const { data, counter } = this.state;
    const newLocalArticles = data;
    newLocalArticles.unshift(article);

    this.setState({
      data: newLocalArticles,
      cards: newLocalArticles.slice(0, counter),
    });

    this.checkArticlesCount();
  };

  checkArticlesCount(x) {
    const { data, counter } = this.state;

    if (x) {
      return counter + 1 > data.length
        ? this.setState({ isHasMore: false })
        : this.setState({ isHasMore: true });
    }

    return counter + 2 >= data.length
      ? this.setState({ isHasMore: false })
      : this.setState({ isHasMore: true });
  }

  render() {
    const { cards, isHasMore } = this.state;
    return (
      <div>
        <PostList
          isHasMore={isHasMore}
          cards={cards}
          handleClick={this.handleClick}
          handleRemove={this.handleRemove}
        />
        <FillBar createArticle={this.createArticle} />
      </div>
    );
  }
}

export default App;
