import image from '../../../../public/success-image.svg'
import Image from 'next/image'
import style from './SuccessRegistration.module.scss'

function SuccessRegistration() {
    return (<>
        <h1> User successfully registered</h1>
        <Image height={290} width={328} src={image} className={style.img} alt={'register image'} />
    </>);
}

export default SuccessRegistration;