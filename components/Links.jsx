import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from "../styles/Links.module.css"
const Links = ({openform}) => {
  return (
    <div className={styles.container}>
        <div className={styles.iconwrapper}>
            <InstagramIcon onClick={()=>{openform("instagram")}} className={styles.icon}/>
        </div>
        <div className={styles.iconwrapper}>
            <RedditIcon className={styles.icon} onClick={()=>{openform("reddit")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <YouTubeIcon className={styles.icon} onClick={()=>{openform("youtube")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <PinterestIcon className={styles.icon} onClick={()=>{openform("pinterest")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <EmailIcon className={styles.icon} onClick={()=>{openform("email")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <FacebookIcon className={styles.icon} onClick={()=>{openform("facebook")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <LinkedInIcon className={styles.icon} onClick={()=>{openform("linkedin")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <WhatsAppIcon className={styles.icon} onClick={()=>{openform("whatsapp")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <TwitterIcon className={styles.icon} onClick={()=>{openform("twitter")}}/>
        </div>
        <div className={styles.iconwrapper}>
            <GitHubIcon className={styles.icon} onClick={()=>{openform("github")}}/>
        </div>
    </div>
  )
}

export default Links