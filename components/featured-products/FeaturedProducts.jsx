import React, {useEffect, useRef, useState} from "react";
import { createRoot } from 'react-dom/client';
import { formatMoney } from '@shopify/theme-currency';
import Swiper from 'swiper/bundle';

const FeaturedProducts = ({id}) => {
  const [products, setProducts] = useState([]);
  const sliderContainer = useRef(null);

  useEffect(()=>{
    const container = document.querySelector(`[data-featured-products-settings="${id}"]`);
    const data = JSON.parse(container.innerHTML);
    setProducts(data.products);
  },[])

  useEffect(() => {
    const swiper = new Swiper(sliderContainer.current, {})
  }, [products])

  return (
    <div className="featured-products__wrap" ref={sliderContainer}>
      {products.map(product => (
        <div className="item" key={product.id}>
          <div className="item__image">
            <a href={product.handle}>
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

