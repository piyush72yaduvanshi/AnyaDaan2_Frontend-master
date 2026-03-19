import React,{useState,createContext,useEffect} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(
        !!localStorage.getItem('accessToken')
    );
    
    // const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser}}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider;
export {AuthContext};
