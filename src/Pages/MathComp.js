export default function MathComp() {
    const productprice = 100.5;
    
    return (
  <div>
    <h1>Math</h1>
    
    
    <p>Orignal Price: {productprice}</p>
    <p>Ceil: {Math.ceil(productprice)}</p>
    <p>Floor: {Math.floor(productprice)}</p>
    <p>Round: {Math.round(productprice)}</p>
  </div>
    );
}