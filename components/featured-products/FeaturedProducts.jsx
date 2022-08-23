import React, {useEffect, useRef, useState} from "react";
import { createRoot } from 'react-dom/client';
import { formatMoney } from '@shopify/theme-currency';
import Swiper from 'swiper/bundle';
import ArrowLeft from "../icons/ArrowLeft.jsx";
import ArrowRight from "../icons/ArrowRight.jsx";

const FeaturedProducts = ({id}) => {
  const [products, setProducts] = useState([]);
  const sliderContainer = useRef(null);
  const handleClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    window.addToCart([{
      id: product.variant.id,
      quantity: 1
    }]).then((response) => console.log(response))
  }

  useEffect(()=>{
    const container = document.querySelector(`[data-featured-products-settings="${id}"]`);
    const data = JSON.parse(container.innerHTML);
    setProducts(data.products);
  },[])

  useEffect(() => {
    const swiper = new Swiper(sliderContainer.current, {
      slidesPerView: 3,
      navigation: {
        nextEl: '.button-next-featured',
        prevEl: '.button-prev-featured',
      },
      spaceBetween: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          centeredSlides: true,
        },
        992: {
          slidesPerView: 3,
        }
      }
    })
  }, [products])

  return (
    <div className="featured-products__wrap" ref={sliderContainer}>
      <div className="swiper-wrapper">
        {products.map(product => (
          <div className="item swiper-slide" key={product.id} onClick={(e)=>handleClick(e, product)}>
            <div className="item__image">
              <a href={`/products/${product.handle}`}>
                <img src={product.featured_image} />
              </a>
            </div>
            <div className="item__information">
              <h3>
                <a href={product.handle}>{product.title}</a>
              </h3>
              <div className="item__price">{formatMoney(product.price, window.moneyFormat)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-next-featured"><ArrowRight/></div>
      <div className="button-prev-featured"><ArrowLeft/></div>
    </div>
  )
}

document.querySelectorAll('[data-featured-products]').forEach((container) => {
  const root = createRoot(container);
  root.render(
    <FeaturedProducts
      id={container.dataset.id}
    />,
  );
});
