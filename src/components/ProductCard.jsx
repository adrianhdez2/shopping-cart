

export default function ProductCard({ product }) {

    const { title, price, image } = product

    return (
        <article className="product">
            <img src={image} alt={title} />
            <div className="details">
                <p className="title">{title}</p>
                <span className="price">$ {price}</span>
            </div>
        </article>
    )
}