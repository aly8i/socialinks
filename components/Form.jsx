import React from 'react'
import { useState,useRef } from 'react';
import styles from "../styles/Form.module.css"
import Image from 'next/image';
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../Firebase";
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
const Form = ({form,openform}) => {
    const router = useRouter()
    const [file, setFile] = useState(null);
    const [displayname, setDisplayName] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const formx = useRef();
    const type = form;

    const sendData = async (e)=>{
        e.preventDefault();
        await handleSubmit();
        // router.reload(window.location.pathname);
        e.target.reset();
    }

    const postSocial = async (pay) => {
      try{
        const res1 = await axios.post(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/socials`, pay);
        return res1;
    }catch(err){
      console.log(err)
    }
      
    }
    const handleSubmit = async()=>{
      // setLoading(true);
      const profilephoto = await uploadFiles(file);
      const payload = {displayname,description,type,link,profilephoto};
      try{
        postSocial(payload);
        
        // setLoading(false);
        // router.push("/admin/products");
      }catch(err){
        console.log(err);
      }  
    }
    function uploadFiles (file){
      if(!file) return;
      return new Promise(resolve =>{
        const storageRef = ref(storage, `/pizzas/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on("state_changed",(snapshot) =>{
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100);
        }, (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then(urlz => {
            resolve(urlz);
          }
          )
        }
        );
      })
    };
  return (
    <form className={styles.form} ref={formx} onSubmit={sendData}>
      <div className={styles.close}>
          <CloseIcon  onClick={()=>openform("")}className={styles.closeicon}/>
      </div>
        <div className={styles.image}>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <label htmlFor="file">   
        <Image
        className={styles.image}
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://firebasestorage.googleapis.com/v0/b/hfc-resto.appspot.com/o/650-6503876_upload-svg-cloud-cloud-upload-icon-svg-hd.png?alt=media&token=6a66d6f0-10ce-49dd-945d-62005b3a24e2"
              }
              alt=""
              width={200}
              height={200}
            />
        </label>
        </div>
        
        <input className={styles.input} onChange={(e)=>setDisplayName(e.target.value)} type="text" name='name' placeholder="Your Display Name" required />
        <input className={styles.input} onChange={(e)=>setLink(e.target.value)} type="url" name="link" placeholder="Your Link" required/>
        <textarea className={styles.textarea} onChange={(e)=>setDescription(e.target.value)} type="text" rows="7" placeholder="Your Description" required> </textarea>
        <button type="submit" className={`btn btn-primary ${styles.button}`}> Add Link </button>
    </form>
  )
}

export default Form