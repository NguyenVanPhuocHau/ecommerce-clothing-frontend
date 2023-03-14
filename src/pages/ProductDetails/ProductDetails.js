import React,{useState,useEffect} from 'react'
import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
const cx = classNames.bind(styles);
const ProductDetails = ()=>{
  const [data, setData]=userState([]);
  const [filter,setFilter]=userState(data);
  const [loading,setLoading]=userState([false]);
  let componentMounted =true;

  useEffect(() =>{
    const getProducts =async()=> {
    setLoading(true);
    const reponse =await fetch( );
    if(componentMounted){
      setData(await reponse.clone().json());
      setFilter(await reponse.json);
      setLoading(false);
      console.log(filter);

    }
    return () =>{
      componentMounted = false;
    }
  }
getProducts();
}, []
  );
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1>product</h1>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default function ProductDetails() {
  return (
    <div className={cx('chitiet')}>
     <h1 className='heading'>Danh sách sản phẩm</h1>
      
     
     </div>
    

  )
  
}
