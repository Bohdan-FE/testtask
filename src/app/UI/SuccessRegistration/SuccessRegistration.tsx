import image from '../../../../public/success-image.svg'
import Image from 'next/image'
import style from './SuccessRegistration.module.scss'
import { motion } from 'framer-motion'


function SuccessRegistration() {
    return (
        <motion.div initial={{ opacity: 0.6, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className='title'> User successfully registered</h2>
            <Image height={290} width={328} src={image} className={style.img} alt={'register image'} />
        </motion.div>);
}

export default SuccessRegistration;