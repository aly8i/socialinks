import styles from "../styles/Bottom.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import {useState,useEffect} from 'react'
import axios from "axios";
function Bottom() {
  const [data,setData]=useState({});
  useEffect(()=>{
    try{
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/static/`).then((res)=>{
      setData({
        github: res.data.github,
        facebook:res.data.facebook,
        whatsapp:res.data.whatsapp,
        linkedin:res.data.linkedin,
        twitter:res.data.twitter,
        gmail:res.data.gmail,
        instagram:res.data.instagram,
        description:res.data.description,
        name:res.data.name,
        phonenumber1:res.data.phonenumber1,
        phonenumber2:res.data.phonenumber2,
        location:res.data.location
      });
    });
    }catch(err){
      console.log(err);
    }
  },[])
  return (
    <div id="bottom" className={styles.container}>
    <footer className="text-center text-lg-start bg-white text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href={data.facebook} className="me-4 link-grayish">
        <i className="fa-facebook-f"><FacebookIcon className={styles.facebook}/></i>
      </a>
      <a href={data.whatsapp} className="me-4 link-grayish">
        <i className="fa-whatsapp"><WhatsAppIcon className={styles.whatsapp}/></i>
      </a>
      <a href={data.twitter} className={`${styles.icon} me-4 link-red`}>
        <i className={`${styles.icon} fa-twitter`}><TwitterIcon className={styles.twitter}/></i>
      </a>
      <a href={data.gmail} className="me-4 link-grayish">
        <i className="fa-google"><GoogleIcon className={styles.google}/></i>
      </a>
      <a href={data.linkedin} className="me-4 link-grayish">
        <i className="fa-linkedin"><LinkedInIcon className={styles.linkedin}/></i>
      </a>
      <a href={data.instagram} className="me-4 link-grayish">
        <i className="fa-instagram"><InstagramIcon className={styles.instagram}/></i>
      </a>
      <a href={data.github} className="me-4 link-grayish">
        <i className="fa-github"><GitHubIcon className={styles.github}/></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-grayish"></i>{data.name}
          </h6>
          <p>
              {data.description}
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Burger</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Dishes</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Pizzas</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Drinks</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/admin/`} className="text-reset">Admin</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/admin2/`} className="text-reset">Admin2</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-grayish"></i> {data.location}</p>
          <p>
            <i className="fas fa-envelope me-3 text-grayish"></i>
            hfc.web.app
          </p>
          <p><i className="fas fa-phone me-3 text-grayish"></i>{data.phonenumber1}</p>
          <p><i className="fas fa-print me-3 text-grayish"></i>{data.phonenumber2}</p>
        </div>
      </div>
    </div>
  </section>
  <div className={`${styles.copyright} text-center p-4`}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://lebanontoken.web.app/">lebanontoken.web.app</a>
  </div>
</footer>
    </div>

  )
}

export default Bottom