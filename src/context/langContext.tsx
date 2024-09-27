import { createContext } from "react";
import { useTranslation} from "react-i18next";
import Cookie from 'js-cookie'
import i18next from "i18next";


export const langContext =createContext<{
    lang:string,
    changeLang :(_lang:string)=>void;
    translate:(_str:string)=>string;
}>({
    lang:'',changeLang:()=>{},translate:()=>{return ''}
});

const {Provider} = langContext;

export const LangContextProvider =({children}:{children:React.ReactNode})=>{
    const {t} = useTranslation();
    const translate =(str:string)=>{
        return t(str);
    }
    const lang =Cookie.get('i18next')?? 'en';
    const changeLang =(lang:string)=>{
        // changeLan
        Cookie.set('i18next',lang);
        i18next.changeLanguage(lang)
        
    }

    return(
        <Provider value={{changeLang,lang,translate}}>
            {children}
        </Provider>
    )
}