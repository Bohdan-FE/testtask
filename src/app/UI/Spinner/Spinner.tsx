import Image from "next/image";
import img from '../../../../public/spinner.svg'
import style from './Spinner.module.scss'

function Spinner() {
    return (
        <Image src={img} width={48} height={48} alt="spiner" className={style.spinner} />
    );
}

export default Spinner;