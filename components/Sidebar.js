import React, { useContext, useState     } from 'react'
import { FaAddressBook, FaBookmark, FaBox, FaHotel, FaTrain } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { AdrexContext } from '../context/AdrexContext'
import { ConnectButton } from 'web3uikit'
import { AiOutlineHistory } from 'react-icons/ai'
import Link from 'next/link'        
import Image from 'next/image'
import Alogo from '../assets/0404-01.svg'   
// import Alogo2 from '../assets/If_1.ico'
import TrainSection from './TrainSection'
import HotelSection from './HotelSection'
import Places from './Places'
import Profile from './Profile'
import Planner from './Planner'





const Sidebar = () => {

  const styles = {
    container: `h-[880px] w-[350px] flex flex-col bg-[#293241] static`,
    profile: ` w-[300px] py-16 flex flex-col justify-center items-center rounded-3xl bg-blue-900 mt-[40px] mb-[50px] border-2 border-[#E0FBFC]`,
    profilePicContainer: `flex rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: `rounded-3xl object-cover`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
    menu: `flex flex-col w-full h-full px-10 gap-10`,
    menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2 text-white`,
    aLogo: `mr-4 flex object-cover`,
    companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
    usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
    username: `flex items-center w-full justify-center`,
    setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
  }

  const {
    isAuthenticated,
    nickname,       
    setNickname,
    username,
    handleSetUsername,
  } = useContext(AdrexContext)

  const [train, showTrain] = useState(false)
  const [hotel, showHotel] = useState(false)
  const [places, showPlaces] = useState(false)
  const [planner, showPlanner] = useState(false)
  const [profile, showProfile] = useState(false)

  const TrainSec = () => {
    showHotel(false)
    showPlaces(false)
    showPlanner(false)
    showProfile(false)
    console.log('about')
    showTrain(true)
  }

  const HotelSec = () => {
    showTrain(false)
    showPlaces(false)
    showPlanner(false)
    showProfile(false)
    console.log('projects')
    showHotel(true)
  }

  const PlacesSec = () => {
    showTrain(false)
    showHotel(false)
    showPlanner(false)
    showProfile(false)
    console.log('socials')
    showPlaces(true)
  }

  const PlannerSec = () => {
    showTrain(false)
    showHotel(false)
    showPlaces(false)
    showProfile(false)
    console.log('blog')
    showPlanner(true)
  }

  const ProfileSec = () => {
    showTrain(false)
    showHotel(false)
    showPlaces(false)
    showPlanner(false)
    console.log('skills')
    showProfile(true)
  }



  return (
    <div className="h-full w-[350px] flex flex-col bg-[#293241] pl-5 ml-6 my-6 rounded-xl ">
      <div className={styles.profile}>
        {
          isAuthenticated && (
            <>
              <div className={styles.profilePicContainer}>
                <Image
                  src={Alogo}   
                  alt='profile'
                  className={styles.profilePic}
                  height={100}
                  width={100} 
                />
              </div>
              {!username ? (
                <>
                  <div className={styles.username}>
                    <input 
                      type='text'
                      placeholder='Username'
                      className={styles.usernameInput}
                      value = {nickname}
                      onChange = {e => setNickname(e.target.value)}
                      
                    />
                    
                  </div>
                  <button
                    className={styles.setNickname}
                    onClick={handleSetUsername}
                  >
                    Set Nickname
                  </button>
                </>
              ) : (
                <div className={styles.welcome}>
                  <div> Welcome {nickname} </div>
                </div>
              )}
            </>
          )
        }
        <div>
          <ConnectButton />
        </div>

      </div>
      <div className={styles.menu}>
        <button className={styles.menuItem} onClick={TrainSec}>
            <FaTrain />
            Train Tickets
        </button>
        <button className={styles.menuItem} onClick={HotelSec}>
          <FaHotel />
          Hotel Tickets
        </button>
        <button className={styles.menuItem} onClick={PlacesSec}>
          <FaBookmark/>
          Places of Interest
        </button>
        <button className={styles.menuItem} onClick={PlannerSec}>
          <FaAddressBook />
          Planner
        </button>
        <button className={styles.menuItem} onClick={ProfileSec}>  
            <BsFillPersonFill />
                Profile
        </button>  

      </div>

      {train ? <TrainSection /> : null}
      {hotel ? <HotelSection /> : null}
      {places ? <Places /> : null}
        {planner ? <Planner /> : null}
        {profile ? <Profile /> : null}
        
    </div>
  )
}

export default Sidebar