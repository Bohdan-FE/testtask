import Hero from "../Hero/Hero";
import style from './Seciton.module.scss'

function HeroSection() {
    return (
        <section className={style.heroSection}>
            <Hero />
        </section>
    );
}

export default HeroSection; 