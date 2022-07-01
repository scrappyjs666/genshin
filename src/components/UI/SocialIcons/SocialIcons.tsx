import ds from './img/ds.svg'
import fb from './img/fb.svg'
import tw from './img/tw.svg'
import styles from './SocialIcons.module.scss'

const arrInfo = [
  { name: ds, link: 'https://discord.com/invite/genshinimpact' },
  { name: fb, link: 'https://www.facebook.com/Genshinimpact/' },
  { name: tw, link: 'https://twitter.com/GenshinImpact' },
]

export const SocialIcons = () => {
  return (
    <div className={styles.Social__wrap}>
      {arrInfo.map((el) => (
        <a
          key={el.name}
          href={el.link}
          target="_blank"
          className={styles.Social__link}
        >
          <img src={el.name} alt={el.name} />
        </a>
      ))}
    </div>
  )
}
