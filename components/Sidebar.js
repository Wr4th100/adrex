import React, { useContext } from 'react'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { AdrexContext } from '../context/AdrexContext'
import { ConnectButton } from 'web3uikit'
import { AiOutlineHistory } from 'react-icons/ai'
import Link from 'next/link'        
import Image from 'next/image'
import Alogo from '../assets/0404-01.svg'





const Sidebar = () => {

  const styles = {
    container: `h-full w-[350px] flex flex-col bg-[#293241] static`,
    profile: ` w-[300px] py-16 flex flex-col justify-center items-center rounded-3xl bg-blue-900 mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
    profilePicContainer: `flex rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: `rounded-3xl object-cover`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
    menu: `flex flex-col w-full h-full px-10 gap-10`,
    menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2 text-white`,
    amazonLogo: `mr-4 flex object-cover`,
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


  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {
          isAuthenticated && (
            <>
              <div className={styles.profilePicContainer}>
                <Image
                  src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
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
        <Link href='/'>
          <div className={styles.menuItem}>
            <Image
              src={Alogo}
              height={50}
              width={50}
              alt='logo'
              className={styles.amazonLogo}
            />
            My Amazon
            <br /> Board 
          </div>
        </Link>
        <div className={styles.menuItem}>
          <FaBox />
          Collections
        </div>
        <div className={styles.menuItem}>
          <BsFillBookmarkFill />
          Saved
        </div>
        <div className={styles.menuItem}>
          <BsFillPersonFill />
          Profile
        </div>
        <Link href='/history'>
          <div className={styles.menuItem}>
            <AiOutlineHistory />  
            Transaction History
          </div>
        
        </Link>
        <div>
          <Image 
            alt='amazon'
            src={Alogo}
            height={100}
            width={150}
          />

        </div>

      </div>
        
    </div>
  )
}

export default Sidebar