const ProductArea = (props) => {
  console.log(props.productData)
  const productArray = props.productData.map(item => 
    <div key={item.name} style={{width: "32vw"}} className="p-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-auto">
              <p className="card-text">Category: <b>{item.category}</b></p>
            </div>
            <div className="col">
              <h5 className="text-end"><b>${item.price}</b></h5>
            </div>
           </div>
          <img className="card-img pb-2" src={item.image} alt="img"/>
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
    </div> 
  ); 
       return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">{productArray[0]}</div>
            <div className="col-md-4">{productArray[1]}</div>
            <div className="col-md-4">{productArray[2]}</div>
          </div>
          <div className="row">
            <div className="col-md-4">{productArray[3]}</div>
            <div className="col-md-4">{productArray[4]}</div>
            <div className="col-md-4">{productArray[5]}</div>
          </div>
          <div className="row">
            <div className="col-md-4">{productArray[6]}</div>
            <div className="col-md-4">{productArray[7]}</div>
            <div className="col-md-4">{productArray[8]}</div>
          </div>
    {/*       <Pagination></Pagination> */}
     </div>
  )
  }
  
  export default ProductArea


/* function renderBody () {
  if (!_.isEmpty(productData)) {
    console.log(productData);
    console.log(productCount)


    const productArray = productData.map(item => 

    <div key={item.name} style={{width: "32vw"}} className="p-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-auto">
              <p className="card-text">Category: <b>{item.category}</b></p>
            </div>
            <div className="col">
              <h5 className="text-end"><b>${item.price}</b></h5>
            </div>
           </div>
          <img className="card-img pb-2" src={item.image} alt="img"/>
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
    </div> 

    ); 

     return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">{productArray[0]}</div>
          <div className="col-md-4">{productArray[1]}</div>
          <div className="col-md-4">{productArray[2]}</div>
        </div>
        <div className="row">
          <div className="col-md-4">{productArray[3]}</div>
          <div className="col-md-4">{productArray[4]}</div>
          <div className="col-md-4">{productArray[5]}</div>
        </div>
        <div className="row">
          <div className="col-md-4">{productArray[6]}</div>
          <div className="col-md-4">{productArray[7]}</div>
          <div className="col-md-4">{productArray[8]}</div>
        </div>
        <Pagination></Pagination>
        <ProductArea productData={productData}></ProductArea>
   </div>
    ) 
  }
} */