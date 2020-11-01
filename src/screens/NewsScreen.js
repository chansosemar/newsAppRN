import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NewsComponent from '../components/NewsComponent';
import axios from 'axios';

export default class NewsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://newsapi.org/v2/everything?q=apple&from=2020-10-31&to=2020-10-31&sortBy=popularity&apiKey=2ba737ac7f9b4e5aa2df4eeeb7730895',
      )
      .then((res) => {
        this.setState({
          listNews: res.data.articles,
        }).catch((err) => {
          console.error('error catch data, check connection');
        });
      });
  }

  render() {
    return (
      <View>
        {this.state.listNews.map((news, index) => (
          <NewsComponent
            key={index}
            image={news.urlToImage}
            title={news.title}
            date={news.publishedAt}
            description={news.description}
          />
        ))}
      </View>
    );
  }
}
