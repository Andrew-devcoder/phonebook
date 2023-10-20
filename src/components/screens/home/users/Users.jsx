import styles from './Users.module.scss'

const Users = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Users;
