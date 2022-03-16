import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './component/Menu';
import List from './component/list';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uniReducer from './reducer/reducer';
import WishList from './component/wishlist';

const URL = 'https://universities.hipolabs.com/search?country=United+States';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then((out) => {
        console.log('out =', out);
        setData(out);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Provider store={createStore(uniReducer, data)}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path={`/`} element={<List />} />
          <Route path={`/list`} element={<List />} />
          <Route path={`/wishlist`} element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
