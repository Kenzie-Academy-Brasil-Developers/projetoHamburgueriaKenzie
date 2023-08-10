import styles from "./style.module.scss"

export const ProductCard = ({ product, addItem }) => {
    return(
        <li className={styles.card} key={product.id}>
            <div className={styles.divImg}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.divContent}>
                <h3 className="typography nameProducts">{product.name}</h3>
                <span className="typography categoryName">{product.category}</span>
                <span className="typography priceProducts">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="buttons medium" onClick={() => addItem(product)}>Adicionar</button>
            </div>
        </li>
    )
}