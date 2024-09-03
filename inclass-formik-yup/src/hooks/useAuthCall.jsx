import axios from "axios";
import {useDispatch} from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

const useAuthCall = () => {
   const dispatch = useDispatch()

   const register = async (userInfo) => {
     dispatch(fetchStart())
    try {
       const {data} = await axios.post("https://10002.fullstack.clarusway.com/users",userInfo) 
       console.log(data)
    } catch (error) {
        dispatch(fetchFail())
    }
   } 
   const login = async (userInfo) => {
    dispatch(fetchStart())
   try {

   } catch (error) {
       dispatch(fetchFail())
   }
  }

   return {register,login}
}

export default useAuthCall;

// https://react.dev/learn/reusing-logic-with-custom-hooks

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.