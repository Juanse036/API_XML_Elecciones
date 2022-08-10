import styles from './styles.module.css'
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {

    return(
        <div className={styles.spinner}>
            <ClipLoader />
        </div>
    )
}

export default Spinner