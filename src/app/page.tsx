import { useState } from 'react'
import Header from './UI/Header/Header'
import HeroSection from './UI/Sections/HeroSection'
import RegistrationSection from './UI/Sections/RegistrationSection'
import UsersSection from './UI/Sections/UsersSection'
import { usersContext } from './context'


export default function Home() {
  const [users, setUsers] = useState([])

  return (<>
    <Header></Header>
    <main>
      <HeroSection />
      <usersContext.Provider value={{ users, setUsers }}>
        <UsersSection />
        <RegistrationSection />
      </usersContext.Provider>
    </main>
  </>
  )
}
