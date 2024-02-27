import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import clsx from 'clsx';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from '../firebase';
import { updateStart, updateSuccess, updateFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

export default function DashProfile() {
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl ] = useState(null);
    const {currentUser, error, loading} = useSelector(state => state.user);
    const [ imageFileUploadProgress, setImageFileUploadProgress ] = useState(null);
    const [ imageFileUploadError, setImageFileUploadError ] = useState(null);
    const [ imageFileUploading, setImageFileUploading ] = useState(false);
    const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
    const [updateUserError, setUpdateUserError] = useState(null);
    const [ formData, setFormData ] = useState({});
    const filePickerRef = useRef();
    const dispatch = useDispatch();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };
    useEffect(() => {
        if (imageFile) {
          uploadImage();
        }
      }, [imageFile]);
      
    const uploadImage = async () => {
        setImageFileUploading(true);
        setImageFileUploadError(null);
        document.getElementById("profile-alert").style.display = "none";
        document.getElementById("profile-alert2").style.display = "none";
        document.getElementById("profile-alert3").style.display = "none";
        document.getElementById("profile-alert4").style.display = "none";
        const storage = getStorage(app);
        const fileName = new Date().getTime() + "-" + imageFile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImageFileUploadProgress(progress.toFixed(0));
            },
            (error) => {
                document.getElementById("profile-alert").style.display = "block";
                setImageFileUrl(null);
                setImageFileUploadError("An error occurred (File must be less than 2MB)");
                setImageFileUploadProgress(null);
                setImageFileUploading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageFileUrl(downloadURL);
                    setFormData({...formData, profilePicture: downloadURL});
                    setImageFileUploading(false);
                });
            }
        );
    };
    const handleChnage = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
        document.getElementById("profile-alert").style.display = "none";
        document.getElementById("profile-alert2").style.display = "none";
        document.getElementById("profile-alert3").style.display = "none";
        document.getElementById("profile-alert4").style.display = "none";
        console.log(formData);
    };
    const handleSubmit = async (e) => {
        document.getElementById("profile-alert").style.display = "none";
        document.getElementById("profile-alert2").style.display = "none";
        document.getElementById("profile-alert3").style.display = "none";
        document.getElementById("profile-alert4").style.display = "none";
        e.preventDefault();
        if (Object.keys(formData).length === 0) {
            document.getElementById("profile-alert3").style.display = "block";
            setUpdateUserError("No changes made")
            return;
        }
        if (imageFileUploading) {
            document.getElementById("profile-alert3").style.display = "block";
            setUpdateUserError('Please wait for image to upload');
            return;
        }
        try {
            dispatch(updateStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }); 
            const data = await res.json();
            if (!res.ok) {
                dispatch(updateFailure(data.message));
                document.getElementById("profile-alert3").style.display = "block";
                setUpdateUserError(data.message);
            } else{
                dispatch(updateSuccess(data));
                document.getElementById("profile-alert2").style.display = "block";
                setUpdateUserSuccess("Profile updated successfully")
            }
        } catch (error) {   
            dispatch(updateFailure(error.message));
            document.getElementById("profile-alert3").style.display = "block";
            setUpdateUserError(error.message);
        }
    };
    const handleDeleteUser = async () => {
        document.getElementById("profile-alert").style.display = "none";
        document.getElementById("profile-alert2").style.display = "none";
        document.getElementById("profile-alert3").style.display = "none";
        document.getElementById("profile-alert4").style.display = "none";
        try{
            dispatch(deleteUserStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (!res.ok) {
                dispatch(deleteUserFailure(data.message));
                document.getElementById("profile-alert4").style.display = "block";
            } else{
                dispatch(deleteUserSuccess());
            }
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
            document.getElementById("profile-alert4").style.display = "block";
        }
    }
  return (
    <>
      <div className="DashProfile">
        <h3>Profile</h3>
        <form onSubmit={handleSubmit}>
            <div className="user-img relative cursor-pointer" style={{display:`block`,borderRadius:`50%`, height:`130px`, margin:`1.5rem auto`, width:`max-content`}} onClick={()=>filePickerRef.current.click()}>
                <img id="user-img" src={imageFileUrl || currentUser.profilePicture} alt="profile-picture" />
                <span className={clsx("", imageFileUploadProgress && "opacity-0")} id="change-profile-pic">Upload</span>
                <input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef}/>
                {imageFileUploadProgress && (
                    <CircularProgressbar id="profile-pic-load" value={imageFileUploadProgress || 0} text={`${imageFileUploadProgress}%`}
                    strokeWidth={5}
                    styles={buildStyles({
                        textSize: '13px',
                        pathColor: `rgb(65, 193, 134)`,
                        textColor: '#fff',
                        trailColor: 'rgb(220, 220, 220)',
                        backgroundColor: '#3e98c7',
                    })}
                    />
                )}
            </div>
            <div id="profile-alert" className="alert alert-danger" role="alert">
                {imageFileUploadError}
            </div>
            <div id="profile-alert2" className="alert alert-success" role="alert">
                {updateUserSuccess}
            </div>
            <div id="profile-alert3" className="alert alert-danger" role="alert">
                {updateUserError}
            </div>
            <div id="profile-alert4" className="alert alert-danger" role="alert">
                {error}
            </div>
            <p>Username &nbsp; <span style={{fontFamily:`'Poppins', sans-serif`,backgroundColor:`#1d1818`, borderRadius:`5px`, padding:`1px 5px`, color:`#ffffff`}}>{currentUser.isAdmin ? 'ADMIN' : 'USER'}</span></p>
            <input type="text" id="username" defaultValue={currentUser.username} onChange={handleChnage}/>
            {currentUser.isAdmin &&
                <>
                    <p>Name</p>
                    <input type="text" id="name" defaultValue={currentUser.name} onChange={handleChnage}/>
                    <p>About</p>
                    <textarea placeholder='Write something here about yourself...' id="about" defaultValue={currentUser.about} onChange={handleChnage}/>
                    <p>LinkedIn handle</p>
                    <input type="text" id="linkedin" defaultValue={currentUser.linkedin} onChange={handleChnage}/>
                    <p>Twitter handle</p>
                    <input type="text" id="twitter" defaultValue={currentUser.twitter} onChange={handleChnage}/>
                    <p>Github handle</p>
                    <input type="text" id="github" defaultValue={currentUser.github} onChange={handleChnage}/>
                </>
            }
            <p>Email address</p>
            <input type="email" id="email" placeholder={currentUser.email} disabled/>
            <p>Password</p>
            <input type="password" id="password" onChange={handleChnage}/>
            <button className="sedbtn sedbtn2" type="submit" disabled={loading || imageFileUploading}>
                {
                    loading ? (
                        <span className="flex gap-2 justify-center"><ReactLoading id="load-svg" className="center transition ease-in-out delay-150" type="spin" color="#fff" height="20px" width="20px" />Loading...</span>
                    ) : "Update"
                }
            </button>
        </form>
        <div id="delete-acc">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal3">
                <span className="hover:underline">Delete account</span>
            </button>
        </div>
        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete account</h1>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete your account?
                    </div>
                    <div id="modal-footer" className="modal-footer">
                        <button className="sedbtn sedbtn2" data-bs-dismiss="modal">No, cancel</button>
                        <button id='modal-delete-user-btn' className="sedbtn sedbtn1" data-bs-dismiss="modal" onClick={handleDeleteUser}>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
