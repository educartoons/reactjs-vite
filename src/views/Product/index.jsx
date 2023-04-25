import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDoc, query, where, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import ProductView from '../../components/ProductView';

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, 'products', id);
      const product = await getDoc(docRef);

      console.log(product);

      setProduct({
        id: product.id,
        ...product.data(),
      });
    }
    fetchProduct();
  }, []);

  return (
    <>
      <ProductView product={product} />
    </>
  );
};

export default Product;
