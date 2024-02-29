import styles from "./VidgetSubmitForm.module.css";

function VidgetSubmitForm ({isValid}) {

    function Chesk () {
        return <div className={styles.wrapper} > Форма заполнена</div>
    }

    function Cross () {
        return <div className={`${styles.wrapper} ${styles.error}`} >  Форма не заполнена</div>
    }

    return (
        <>
            {isValid ? <Chesk /> : <Cross />}
        </>
    )
}

export default VidgetSubmitForm;
