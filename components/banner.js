import styles from "../styles/banner.module.css";
import Image from "next/image";
const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/static/cover3.png"
          alt="banner image"
          width="500px"
          height="500px"
          className={styles.bannerImage}
        />
        {/* <div className={styles.bgGradient}></div> */}
      </div>
      <div className={styles.right}>
        {/* <div className={styles.intro}> */}
        <p className={styles.hello}>Hello, I am</p>
        <h1 className={styles.name}>Anand Shukla</h1>
        <p className={styles.developer}>Javascript Full Stack Developer</p>
        <p className={styles.mern}>
          React Js | Node Js | Express Js | React Native | MongoDB | SQL
        </p>
        {/* </div> */}
        {/* <div className={styles.rightBackground}></div> */}
      </div>
    </div>
  );
};

export default Banner;
