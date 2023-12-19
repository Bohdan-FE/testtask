'use client'
import { useEffect, useState } from 'react'
import Header from './UI/Header/Header'
import HeroSection from './UI/Sections/HeroSection'
import RegistrationSection from './UI/Sections/RegisterSection'
import UsersSection from './UI/Sections/UsersSection'
import { usersContext } from './context'
import { getUsers } from '@/lib/getUsers'


export default function Home() {
  const [usersData, setUsersData] = useState(null)

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const data = await getUsers(1, 6)
        setUsersData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsersData()
  }, [])


  return (<>
    <Header></Header>
    <main>
      <HeroSection />
      <usersContext.Provider value={{ usersData, setUsersData }}>
        <UsersSection />
        <RegistrationSection />
      </usersContext.Provider>
    </main>
  </>
  )
}
