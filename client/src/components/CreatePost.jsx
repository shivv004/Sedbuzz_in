import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './css/create-post.css'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default function CreatePost() {
  const [ file, setFile ] = useState(null);
  const [ imageUploadProgress, setImageUploadProgress ] = useState(null);
  const [ imageUploadError , setImageUploadError ] = useState(null);
  const [ formData, setFormData ] = useState({});
  const [ publishError, setPublishError ] = useState(null);
  const navigate = useNavigate();
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['code-block', 'link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'code-block',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const handleUploadImage = async (e) => {
    try {
      if(!file) {
        document.getElementById("create-post-alert").style.display = "block";
        setImageUploadError('Please select an image to upload');  
        return;
      }
      document.getElementById("create-post-alert").style.display = "none";
      document.getElementById("create-post-alert2").style.display = "none";

      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          document.getElementById("create-post-alert").style.display = "block";
          setImageUploadError("Image upload failed (size limit: 2MB)");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadError(null);
            setImageUploadProgress(null);
            setFormData({...formData, image: downloadURL});
          });
        }
      );
    } catch (error) {
      document.getElementById("create-post-alert").style.display = "block";
      setImageUploadError('Image upload failed (size limit: 2MB)');
      setImageUploadProgress(null);
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("create-post-alert2").style.display = "none";
    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(!res.ok) {
        setPublishError(data.message);
        document.getElementById("create-post-alert2").style.display = "block";
        return
      }
      if(res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`)
      }
    } catch (error) {
      setPublishError('Something went wrong');
      document.getElementById("create-post-alert2").style.display = "block";
    }
  }
  return (
    <>
      <Helmet>
        <title>Create Post | SedBuzz</title> 
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/create-post`}/>
      </Helmet> 
        <style>
        {`
        @media screen and (min-width: 1025px){
            nav{
                background: white;
                opacity:0.98;
                #hr1{
                    opacity: 0.18;
                    transition: opacity 0.4s ease-in-out;
                    -webkit-transform: rotate(90deg);
                    transform: rotate(90deg);
                    width: 28px;
                    margin-top: 2px;
                }
                #hr2{
                    opacity: 0.18;
                    z-index: 1;
                    transition: opacity 0.4s ease-in-out;
                    width: 130vw;
                    -webkit-transform:rotate(180deg);
                    left: -20vh;
                }
                .dropdown{
                    font-weight: 500;
                    margin: 0 0.75rem;
                    color: #000000;
                }
                .dropdown-menu.show{
                    opacity: 1;
                    transition: opacity 0.4s ease-in-out;
                }
                #nav-links , #signup{
                    font-size: 16px;
                    font-weight: 500;
                }
                #nav_item_text{
                    color: #000000;
                    transition: var(--trans,color .4s ease 0s);
                }
                #logo{
                    background-image: url("/assets/logo-light.svg");
                    transition: background-image 0.4s ease-in-out;
                    background-size:contain;
                    background-repeat: no-repeat;
                }
                #main-menu, #left-sec, #lg-menu-toggler{
                    color: black;
                    transition: var(--trans,color .4s ease 0s);
                }
                #left-sec{
                    gap: 0.75rem;
                }
            }
            nav:hover{
                #hr2{
                    opacity: 0.18;
                    z-index: 1;
                    transition: opacity 0.4s ease-in-out;
                    width: 130vw;
                    -webkit-transform:rotate(180deg);
                    left: -20vh;
                }
            }
            .footer-cover{
                display:none !important;
            }
            .create-post-sec2 .sedbtn:hover{
              #load-svg{
                transition: 0.3s ease-in-out;
                fill: #000000 !important;
              }
            }
        }
        @media screen and (max-width: 1025px){
            .footer-cover{
                display:none !important;
            }
            .create-post-sec2 .sedbtn:hover{
              #load-svg{
                transition: 0.3s ease-in-out;
                fill: #000000 !important;
              }
            }
        }
        `}
    </style>
    <div className="create-post-cover">
      <div className="create-post">
        <h3>Create a post</h3>
        <form onSubmit={handleSubmit}>
          <div className="create-post-sec1">
            <input type="text" placeholder="Title of the post..." required onChange={(e) => setFormData({ ...formData, title: e.target.value })}/>
            <div className="form-floating">
              <select className="form-select" onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                <option value="uncategorized">uncategorized</option>
                <option value="technology">Technology</option>
                <option value="gaming">Gaming</option>
                <option value="science">Science</option>
              </select>
            </div>
          </div>
          <textarea id='description-input' placeholder="Description of the post (Max 2 Lines Please)..." required onChange={(e) => setFormData({ ...formData, description: e.target.value })}/>
          <div className="create-post-sec2">
            <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])}/>
            <button type="button" className="sedbtn sedbtn2" onClick={handleUploadImage} disabled={imageUploadProgress}> 
              {imageUploadProgress ?
              (
                <span className="flex gap-2 justify-center"><ReactLoading id="load-svg" className="center transition ease-in-out delay-150" type="spin" color="#fff" height="20px" width="20px" />Uploading...</span>
              ) : (
              "Upload image"
              )}
            </button>
          </div>
          {formData.image && (
            <img id="preview-thumbnail" className="w-full mb-8" src={formData.image} alt="thumbnail" />
          )}
          <textarea style={{height:`100px`}} id='description-input' placeholder="Image Author Reference (<>)..." required onChange={(e) => setFormData({ ...formData, imageRef: e.target.value })}/>
          <div id="create-post-alert" className="alert alert-danger" role="alert">
            {imageUploadError}
          </div>
          <div className="create-post-sec3">
            <ReactQuill theme="snow" modules={modules} formats={formats} placeholder="" style={{height:`600px`}} required  onChange={(value) => setFormData({ ...formData, content: value })} />
          </div>
          <div className="create-post-sec4">
            <button id="create-post-publish" className="sedbtn sedbtn2" type="submit">Publish</button>
          </div>
          <div id="create-post-alert2" className="alert alert-danger" role="alert">
            {publishError}
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
