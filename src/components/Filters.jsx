import { useFilters } from '../hooks/useFilers'

export default function Filters() {

    const { filters, setFilters } = useFilters()

    const handleChangeFiltersCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    const handleChangeFiltersPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            price: event.target.value
        }))
    }

    return (
        <div className="filters">
            <div>
                <label htmlFor="price">Precio desde:</label>
                <input type="range" name="price" id="price" min={0} max={1000} step={1} value={filters.price} onChange={handleChangeFiltersPrice}/>
                <small>$ {filters.price}</small>
            </div>
            <div>
                <label htmlFor="category">Categoria:</label>
                <select name="category" id="category" value={filters.category} onChange={handleChangeFiltersCategory}>
                    <option value="all">Todos</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="men's clothing">Men&apos;s clothing</option>
                    <option value="women's clothing">Women&apos;s clothing</option>
                </select>
            </div>
        </div>
    )
}
