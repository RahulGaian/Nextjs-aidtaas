// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, push } from 'firebase/database';
// import images from '../constants/images';
// import images2 from '../constants/images2';
// import st from './index.module.css';
// import Img from '../components/Image';
// import React, { useState, useEffect } from 'react';
// import RedirectTimer from './RedirectionTimer';

// const firebaseConfig = {
//   apiKey: 'AIzaSyC5Vmkk0JXQ1Qw2taRYnmklwhNXmntmpZA',
//   authDomain: 'ngtvwebinar.firebaseapp.com',
//   databaseURL: 'https://ngtvwebinar-default-rtdb.firebaseio.com',
//   projectId: 'ngtvwebinar',
//   storageBucket: 'ngtvwebinar.appspot.com',
//   messagingSenderId: '731724057463',
//   appId: '1:731724057463:web:b6c4aa17420bec68002f72',
//   measurementId: 'G-97P7D5WWLH',
// };

// // Initialize Firebase only if it's not initialized yet
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// function Webinar() {
//   const sendData = (data) => {
//     // Get a new unique key for the data
//     const newKey = push(ref(db, 'webinar/'), {
//       data,
//     });
//   };

//   let [submit, setSubmit] = useState(true);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Get form data
//     const formData = new FormData(event.target);
//     const data = {
//       firstname: formData.get('first'),
//       lastname: formData.get('last'),
//       email: formData.get('email'),
//       jobName: formData.get('Job'),
//       company: formData.get('Company'),
//       phone: formData.get('Phone'),
//       // Add more data properties if needed
//     };

//     // Send data to Firebase
//     sendData(data);
//     setSubmit(false);
//   };

//   return (
//     <>
//     <div className={""}>
//         <img src={images.Contact_background_01} className={st.Contact_background} alt='backgroundimage'/>
//         <div className={st["grid-container1"]}>
           
//             <div className={st["left-section"]}>
               
//             <div className={st.container} >
//                 <Img src={"/images/mob.png"}  className={st["Contact_background_0"]} />
//                             <div className="main">
//                                 <div className={st["c1"]}>
//                                     <span className={st["c6"]}>
//                                     LIVE WEBINAR 
//                                     </span>
//                                     <span className={st["c7"]}>
//                                       July 5, 2023, 1:00 PM EST | 10:00 AM PST   
//                                     </span>
//                                  </div>
//                                  <br />
//                                  <div className={st.register}>Register Now !!</div>
//                                 <div className={st.c2}>
//                                     NexGen TV Marketplace <br/>
//                                     Webinar
//                                 </div>
                 
//                                 <div className={st.c1}></div>
//                                 <div className={st.c4D}>
//                                     <div className={st.c4}>
//                                         <p>NexGen TV marketplace is a dynamic ecosystem that brings together industry players to create, share, and monetize innovative applicationsand services for NexGen TV.

                                  
                                      
//                                         </p>
//                                         <p>
//                                         A one stop hub for broadcasters, content creators, advertisers &
//                                         echnology providers to collaborate and deliver immersive, interactive,
//                                         and personalized experiences to viewers.
//                                         </p>
//                                         <p>
//                                         Get firsthand tips on on how to be part of this vibrant ecosystem.
//                                         Have all your questions answered by our experts.
//                                         </p>
//                                     </div>
//                                 </div>


//                             </div>
//             </div>

//                 <hr className="hr" />

                
//                 <div>
                    
//                 </div>

//             </div>
            
         
         
        {submit? 
            <div className={st.rightcolumn} >
                <div className={st["middleimage"]}>
                <img src={images2.webinarimage} className={st.webinarimage} alt='backgroundimage'/>
</div>
                <div className="form-container">
                    <form className={st.form} onSubmit={handleSubmit}>
                        <div className={st["c5"]} >
                            Join Our Webinar
                        </div>
                        <div className="form-group">
                            <label htmlFor="First Name"  className="form-label" >Full Name*</label><br />
                            <input className="form-control" name="first" required />
                        </div>
         
                        <div className="space"></div>
                        <div className="form-group">
                            <label htmlFor="Business Email" className="form-label" >Business Email*</label><br />
                            <input className="form-control" type='email' name="email" required />
                        </div>
                        <div className="space"></div>
                        <div className="form-group">
                            <label htmlFor="Phone" className="form-label" >Phone</label><br />
                            <input className="form-control" name="Phone"  />
                        </div>
                  
                        
                        <div className="space"></div>
                        <div className="form-group">
                            <label htmlFor="Job Title" className="form-label">Job Title</label><br />
                            <input className="form-control" name="Job" />
                        </div>
                 
                        <div className="space"></div>

                        <div className="form-group">
                            <label htmlFor="Company Name" className="form-label">Company Name *</label><br />
                            <input className="form-control" name="Company" required />
                        </div>
                  
                        <div claright-ssName="space"></div>

                        <div className="form-group">
                            <button className={st.btnregister }>Register Now</button>
                        </div>
                        <div className={st.dt}></div>
                        <div className={st.dtext}>
                            <small>By submitting this form, I confirm that I have read and agree to the Privacy Statement & Terms and Conditions</small>
                        </div>
                    </form>
                </div>
            </div>:
            <div className={st.rightcolumn}>
                         <div className={st["middleimage"]}>
                         <img src={images2.webinarimage} className={st.webinarimage}   alt='backgroundimage'/>
            </div>
                    <div className={st["form-container1"]}>

                            <Img src={"/images/Group.png"} alt="" />
                            <br />
                            <p>Thank you for choosing Mobius. Our Platform Team will get in touch to get you started.</p>
                            <RedirectTimer></RedirectTimer>
                    </div>
            </div>
}
        
//         </div>
//     </div >
//     </>
//   );
// }

// export default Webinar;
