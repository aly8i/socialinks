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
import LanguageIcon from '@mui/icons-material/Language';
const SocialIcon = ({type}) => {
    const render = ()=>{
        switch(type) {
            case "instagram":
                return(<InstagramIcon/>)
              break;
            case "whatsapp":
                return(<WhatsAppIcon/>)
              break;
            case "youtube":
              return(<YouTubeIcon/>)
              break;
            case "reddit":
              return(<RedditIcon/>)
              break;
            case "twitter":
              return(<TwitterIcon/>)
              break;
            case "email":
              return(<EmailIcon/>)
              break;
            case "linkedin":
              return(<LinkedInIcon/>)
              break;
            case "pinterest":
              return(<PinterestIcon/>)
              break;
            case "github":
              return(<GitHubIcon/>)
              break;
            case "facebook":
              return(<FacebookIcon/>)
              break;
            default:
              return(<LanguageIcon/>)

          }
    }
  return (
    <>{render()}</>
  )
}

export default SocialIcon