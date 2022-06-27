
export default function Header({onChange, setQuery, query, countCartItems}) {
   
    return (
      <header>
        <div className="header__container">
          <div className="title">Awesome shopping mall</div>
          <div className="subtitle">
            Check out what other designers have created using ProtoPie—download
            these examples to learn exactly how they made their interactions.
          </div>
          <div className="btn__area">
            <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer"> </a>
            <input
          className="search"
          placeholder="Search..."
          onChange={onChange}
        />
          </div>
          <div>
        <a href="#/cart">
          Cart{' '}
          {countCartItems ? (<button className="badge">{countCartItems}</button>) : ('')} 
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
        </div>
      </header>
    );
  }
 