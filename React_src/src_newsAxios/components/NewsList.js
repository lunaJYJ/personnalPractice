import React from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import {useState, useEffect} from 'react'
import axios from 'axios';
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
`;

// const sampleArticle = {
//   title: 'Title',
//   description :'content',
//   url: 'http://google.com',
//   urlToImage: 'https://via.placeholder.com/160'
// };

const NewsList = ({category}) => {
  const [loading, response, error] = usePromise(() =>{
    const query = category === 'all' ? '' : `&category=${category}`
    return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3eb3d2f260f349f9ab6a94c78ec14baf`);
  },[category]);

  if(loading) {
    return <NewsListBlock>Loading..</NewsListBlock>;
  }
  if(!response) {
    return null;
  }
  if(error) {
    return <NewsListBlock>Error Occured! Contect to Administrator.</NewsListBlock>;
  }

  const {articles} = response.data;

  return (
    <NewsListBlock>
      {articles.map(article => (
      <NewsItem key={article.url} article={article} />
    ))}
    </NewsListBlock>
  );
};

export default NewsList;