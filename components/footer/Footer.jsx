import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import ReEducateLogo from "../../images/ReEducate-Logo.png";
import MailIcon from "../../images/Mail-Icon.svg";
import PhoneIcon from "../../images/Phone-Icon.svg";
import AdressIcon from "../../images/Adress-Icon.svg";
import FacebookIcon from "../../images/Facebook-Icon.svg";
import LinkedinIcon from "../../images/LinkedIn-Icon.svg";
import YoutubeIcon from "../../images/Youtube-Icon.svg";
import InstagramIcon from "../../images/InstagramIcon.svg";
import TiktokIcon from "../../images/TikTok-Icon.svg";

function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <Image
          src={ReEducateLogo}
          alt="Logo Of Re;Educate"
          className={styles.logo}
        />
        <div className={styles.contactContainer}>
          <h5>საკონტაქტო ინფორმაცია</h5>
          <div className={styles.mailContainer}>
            <Image src={MailIcon} alt="E-Mail Icon" />
            <div className={styles.detailedInformation}>
              <p>ელ.ფოსტა</p>
              <span>contact@reeducate.space</span>
            </div>
          </div>
        </div>
        <div className={styles.phoneContainer}>
          <Image src={PhoneIcon} alt="Phone Icon" />
          <div className={styles.detailedInformation}>
            <p>ტელეფონი</p>
            <span>+995 032 2 11 21 55</span>
            <span>+995 598 773 288</span>
          </div>
        </div>
        <div className={styles.adressContainer}>
          <Image src={AdressIcon} alt="Adress Icon" />
          <div className={styles.detailedInformation}>
            <p>მისამართი</p>
            <span>თბილისი ცენტრალი რე:ინვენთი</span>
          </div>
        </div>
        <div className={styles.socialNetworkContainer}>
          <Image
            src={ReEducateLogo}
            alt="Logo Of Re;Educate"
            className={styles.smallLogo}
          />
          <Image
            src={FacebookIcon}
            alt="Logo Of Re;Educate"
            className={styles.netWorkLogo}
          />
          <Image
            src={LinkedinIcon}
            alt="Logo Of Re;Educate"
            className={styles.netWorkLogo}
          />
          <Image
            src={InstagramIcon}
            alt="Logo Of Re;Educate"
            className={styles.netWorkLogo}
          />
          <Image
            src={TiktokIcon}
            alt="Logo Of Re;Educate"
            className={styles.netWorkLogo}
          />
          <Image
            src={YoutubeIcon}
            alt="Logo Of Re;Educate"
            className={styles.netWorkLogo}
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
