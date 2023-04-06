import React from 'react'
import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import { data } from 'pages/ProductDetails/data';
const cx = classNames.bind(styles);


export default function ProductDetails() {
  return (
    <div className={cx('chitiet')}>
     <h1 className='heading'>Danh sách sản phẩm</h1>
     <>
            <section className="product">
                <div className="container" >
                    <div className="row" >
                        {data.map((course, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={index} >
                                    <div className="card" >
                                        <img src={course.imageUrl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{course.courseName}</h5>
                                            <p className="card-text">{course.metaDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
     
     </div>
    

  )}
  
