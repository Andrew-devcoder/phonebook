import styles from './ContainerUsersList.module.scss'

const ContainerUsersList = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default ContainerUsersList;
