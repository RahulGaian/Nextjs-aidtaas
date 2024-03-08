import {initializeApp} from 'firebase/app';
import { getDatabase,ref,push } from "firebase/database";
import images from "../constants/images"

// import img from "../images/mob.png"
const firebaseConfig = {
    apiKey: "AIzaSyC5Vmkk0JXQ1Qw2taRYnmklwhNXmntmpZA",
    authDomain: "ngtvwebinar.firebaseapp.com",
    databaseURL: "https://ngtvwebinar-default-rtdb.firebaseio.com",
    projectId: "ngtvwebinar",
    storageBucket: "ngtvwebinar.appspot.com",
    messagingSenderId: "731724057463",
    appId: "1:731724057463:web:b6c4aa17420bec68002f72",
    measurementId: "G-97P7D5WWLH"
  };
  
  
  // Initialize Firebase
  
  
// const app = 
initializeApp(firebaseConfig);

const db = getDatabase();

function Marketing() {
  const sendData = (data) => {
    // Get a new unique key for the data
    // const newKey = ref.push().key;

    // Define the data object
 
    push(ref(db, 'marketing/' ), {
        data
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = {
      firstname: formData.get('first'),
      lastname : formData.get('last'),
      email: formData.get('email'),
      jobName: formData.get('Job'),
      company: formData.get('Company'),
      phone: formData.get('Phone')


      // Add more data properties if needed
    };

    // Send data to Firebase
    sendData(data);
  };

  return (
    <>
    <div class="Container">
        <img src={images.Contact_background_01} className="Contact_background" alt='contactbackground'/>
        <div class="grid-container">
           
            <div class="left-section">
               
                <div class="container " >
                    <div class="main">

                        <div class="c2">
                            Join Us
                        </div>
     
          


                    </div>
                </div>
                {/* <img src={img} className="Contact_background_0"/> */}

                <hr class="hr" />


            </div>
            <div class="right-column">
                <div class="form-container">
                    <form class="form" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="First Name"  class="form-label" >First Name*</label><br />
                            <input class="form-control" name="first" required />
                        </div>
                        <div class="space"></div>
                        <div class="form-group">
                            <label htmlFor="Last Name" class="form-label" >Last Name*</label><br />
                            <input class="form-control" name="last" required />
                        </div>  
                        <div class="space"></div>
                        <div class="form-group">
                            <label htmlFor="Business Email" class="form-label" >Business Email*</label><br />
                            <input class="form-control" type='email' name="email" required />
                        </div>
                        <div class="space"></div>

                         <div class="form-group">
                            <label htmlFor="Phone" class="form-label" >Phone*</label><br />
                            <input class="form-control" name="Phone" required />
                        </div>
                        <div class="space"></div>
                        <div class="form-group">
                            <label htmlFor="Job Title" class="form-label">Job Title</label><br />
                            <input class="form-control" name="Job" />
                        </div>
                        <div class="space"></div>
                        <div class="form-group">
                            <label htmlFor="Company Name" class="form-label">Company Name</label><br />
                            <input class="form-control" name="Company" />
                        </div>
                        <div class="space"></div>

                        <div class="space"></div>
                    
                        <div class="space"></div>
                        <div class="form-group">
                            <button class="btn">Submit</button>
                        </div>
                        <div class="dt"></div>
                        <div class="dtext">
                            <small>By submitting this form, I confirm that I have read and agree to the Privacy Statement & Terms and Conditions</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div >
</>
  );
}

export default Marketing;
