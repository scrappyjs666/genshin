import { Button } from 'components/UI/Button/Button'
import {
  allHero,
  favoriteHero,
  sortAZ,
  sortZA,
} from 'Store/heroList/heroListSlice'
import { useAppDispatch } from 'Store/hooks/hooks'
import styles from './Filter.module.scss'

export const Filter = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className={styles.Filter__wrap}>
        <div className={styles.filter}>
          <Button fn={() => dispatch(allHero())} name="all hero" />
          <Button fn={() => dispatch(favoriteHero())} name="favorite hero" />
          <Button fn={() => dispatch(sortAZ())} name="name A-Z" />
          <Button fn={() => dispatch(sortZA())} name="name Z-A" />
        </div>
      </div>
    </>
  )
}
