import {useEffect, useState, useCallback} from 'react';
import './App.css';
import axios from 'axios';

const apiKey = 'e40c9540da594621a4e0e3349a197c63';

// networking
// document.getElementById('containerName').innerHTML = '<li></li>'

async function getNewsList(keyword) {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${apiKey}`);
  return response.data.articles;
}

function App() {

  const [newsList, setNewsList] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    async function fetchData(keyword) {
      // You can await here
      const response = await getNewsList(keyword);
      console.log(response);
      setNewsList(response);
    }
    fetchData(keyword);

  }, [keyword]);

  const onChangeText = useCallback((e) => {
    setKeyword(e.target.value)
  }, []);

  const onClickBtn = useCallback(async (e) => {
    // You can await here
    const response = await getNewsList(keyword);
    setNewsList(response);

  }, [keyword]);


  return (
    <div className="App">
      <input type="text" value={keyword} placeholder='검색어를 입력하세요' onChange={onChangeText}/>
      <button onClick={onClickBtn}>뉴스가져와</button>
      <ul id="containerName">
        {newsList.map((row, idx) => {
          return (
            <li key={idx}>{row.title}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
