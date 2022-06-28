// import React from "react";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Prototypes  from "./components/Prototypes";
import Footer from "./components/Footer";
import { useState } from "react";
// import React, { component } from 'react';

function Home(props) {

    const [query, setQuery] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const onChange = (e) => {
      setQuery(e.target.value.toLowerCase())
  }
   //장바구니에 내가 선택한 목록이 있을경우 숫자1을 더한다, 없을경우 상품을 추가한다
   const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>  //여기서 map은 반복문 역할을 한다 ...exist는 스프레드 문법으로 배열을 펼치고 qty를 더한다.
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //장바구니에 1개의 수량이 있으면 상품목록을 지운다, 수량이 2개 이상일 경우 숫자1을 뺀다.
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  
    return (
      <Home>
       <Header countCartItems={cartItems.length} onChange={onChange} query={query} setQuery={setQuery} onAdd={onAdd} onRemove={onRemove}/>
       <div className="container">
        <Prototypes onChange={onChange} query={query} setQuery={setQuery} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        <Orders onAdd={onAdd} onRemove={onRemove} query={query} setQuery={setQuery} cartItems={cartItems}/>
        <Footer/>
       </div>
      </Home>
    );
  }

export default Home;