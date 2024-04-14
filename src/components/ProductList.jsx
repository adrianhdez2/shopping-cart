import { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useFilters } from "../hooks/useFilers";


export default function ProductList() {

    const [products, setProducts] = useState([])
    const { filterProducts } = useFilters()

    useEffect(() => {

        const obtenerDatos = () => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error(error))
        }

        obtenerDatos()

    }, [])

    return (
        <section className="container_products">
            {
                filterProducts(products).length <= 0 ?
                    <div className="container_error">
                        <p>No hay productos</p>
                    </div>
                    :
                    filterProducts(products).map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
            }
        </section>
    )
}
