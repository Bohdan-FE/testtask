'use client'
import Header from './UI/Header/Header'
import HeroSection from './UI/Sections/HeroSection'
import RegistrationSection from './UI/Sections/RegisterSection'
import UsersSection from './UI/Sections/UsersSection'
import { usersContext } from './context'
import { getUsers } from '@/lib/getUsers'
import { useEffect, useState } from 'react'
import { Register, UserData } from '@/lib/types'


export default function Home() {
  const [usersData, setUsersData] = useState<null | UserData>(null)
  const [registerData, setRegister] = useState<null | Register>(null)

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


  return (
    <usersContext.Provider value={{ usersData, setUsersData, registerData, setRegister }}>
      <Header />
      <main>
        <HeroSection />
        <UsersSection />
        <RegistrationSection />
      </main>
    </usersContext.Provider>
  )
}
