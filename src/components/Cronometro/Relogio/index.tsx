import { tempoParaSegundos } from "../../../common/utils/time"
import style from "./relogio.module.scss"

export default function Relogio() {
    console.log(tempoParaSegundos)
    return (
        <>            
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
}