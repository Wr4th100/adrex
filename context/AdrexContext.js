import { createContext, useState, useReducer, useEffect } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const AdrexContext = createContext();

export const AdrexProvider = ({ children }) => {

    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('')
    const [assets, setAssets] = useState([])

    const { user, isAuthenticated, enableWeb3, Moralis, isWeb3Enabled } = useMoralis()

    useEffect(() => {
        ;(async() => {
           if (!isAuthenticated) {
               const currentUsername = await user?.get('nickname')
               setUsername(currentUsername)
           } 
        })()
    }, [isAuthenticated, user, username])

    // useEffect(() => {
    //     ;(async() => {
    //         if (isWeb3Enabled) {
    //             await getAssets()
    //         }
    //     })()
    // }, [assets, isWeb3Enabled])

    const handleSetUsername = () => {
        if (user) {
            if (nickname) {
                user.set('nickname', nickname)
                user.save()
                console.log(username)
                setNickname('')
            } else {
                console.log("Can't set empty nickname")
            }
        } else {
            console.log("No user")
        }
    }
    
    return (
        <AdrexContext.Provider
            value={{
                isAuthenticated,
                nickname,
                setNickname,
                username,
                handleSetUsername,
                assets,
            }}
        >
            {children}

        </AdrexContext.Provider>
    )

}