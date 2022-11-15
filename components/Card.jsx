import React from 'react'
import styles from '../styles/Card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SocialIcon from './SocialIcon';
const card = ({socials}) => {
const shorten =(str) =>{
  var result;
  if(str.length>=60)
    result = str.substring(0,60)+"...";
  else
    result = str
  return result
}
  return (
    socials.map((social)=>(
      <Link href={social.link} passHref>
        <div className={styles.card} key={social.id}>
          <h2>{social.displayname}</h2>
          <Image className={styles.image} alt="" src={social.profilephoto} width={200} height={200}/>
          <p className={styles.sectionD}>{shorten(social.description)}</p>
          <div className={styles.section}>
            <SocialIcon type={social.type}/>
          </div>
        </div>
      </Link>
    )
    )
  )
}

export default card