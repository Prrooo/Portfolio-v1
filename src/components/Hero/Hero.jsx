import style from '../Hero/Hero.module.css'
import heroImage from '../../../assets/hero/hero2.jpg';

const Hero = () => {
    const heading="Hi, I'm Harsh";
    const into="I'm a full-stack developer with 2 years of experience using React and NodeJS. Reach out if you'd like";
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.heading}>{heading}</h1> 
            <p className={style.info} >{into}</p> 
            <a href='mailTo:harshmalik00011@gmail.com'  className={style.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} className={style.heroImg}/>
        <div className={style.topBlur}></div>
        <div className={style.bottomBlur}></div>
    </section>
  )
}

export default Hero