
import styles from './page.module.css'
import Header from './UI/Header/Header'
import Hero from './UI/Hero/Hero'
import Users from './UI/Users/Users'

export default function Home() {
  return (<>
    <Header></Header>
    <main>
      <section><Hero /></section>
      <section id='users-section'>
        <Users />
      </section>
    </main>
  </>
  )
}
