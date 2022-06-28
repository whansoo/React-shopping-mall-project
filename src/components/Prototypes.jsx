import { Users } from "./user"

  function Prototypes(props) {
    const { onAdd, query } = props;
  
    return (
        
      <main>
       
        <div className="prototypes">
          {Users.filter((asd) => 
              asd.title.toLowerCase().includes(query))
             .map((product) =>  {
            // const { id, thumbnail, title, price, desc, pieUrl } = prototype;
            return (
                
               
              <div className="prototype" key={product.id}>
                <a href={`/Detail/${product.id}`} target="_BLANK" rel="noreferrer">
                  <div
                    style={{
                      padding: "25px 0 33px 0",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      playsInline
                      className="prototype__artwork prototype__edit"
                      style={{
                        objectFit: "contain",
                      }}
                      src={product.thumbnail}
                    />

                  </div>
                </a>
  
                <div className="prototype__body">
                  <div className="prototype__title">
                    <div className="btn btn--primary float--right" onClick={() => onAdd(product)}>
                    
                      <i className="icon icon--plus" />
                    </div>
  
                    {product.title}
                  </div>
                  <p className="prototype__price">${product.price}</p>
                  <p className="prototype__desc">{product.desc}</p>
                </div>
              </div>
             
             );
          }
          )};
        </div>
      </main>
    )
  }

  export default Prototypes;