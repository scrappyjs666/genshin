import { Logo } from 'components/UI/Logo/Logo'
import { Search } from 'components/UI/Search/Search'
import { Link } from 'react-router-dom'
import { Account } from './Account/Account'
import styles from './Header.module.scss'
import { Navigate } from './Navigate/Navigate'

export const Header = () => {
  return (
    <div className={styles.header__wrap}>
      <header className={styles.header}>
        <Link to="/HomePage">
          <Logo />
        </Link>
        <Search />
        <Account />
        <Navigate />
      </header>
    </div>
  )
}
