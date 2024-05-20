import styles from './ServiceCard.module.css'
// internal components
import Button from '../Button/Button'
// internal assets
import { IoIosCheckmarkCircle } from "react-icons/io";

interface ServiceCardProps {
    title: string,
    subtitle: string,
    price: string,
    pricePer?: string,
    list: string[],
    onClick?: (e: any) => void;
}

function ServiceCard({title, subtitle, price, pricePer, list, onClick}: ServiceCardProps) {
  return (
    <article className={styles.service_card}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.price}>
            {price}
            <span className={styles.price_per}>{pricePer}</span>
        </p>
        <ul className={styles.list_item_container}>
            {list.map((listItem) => (
                
                <li key={listItem} className={styles.list_item}>
                    <IoIosCheckmarkCircle className={styles.icon} />
                    {listItem}
                </li>
            ))}
        </ul>
        <div className={styles.btn_container}>
            <Button
                label="CONTACT US"
                bgColorBlue={true}
                onClick={onClick}
            />
        </div> 
    </article>
  )
}

export default ServiceCard