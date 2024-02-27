import React from 'react'
import { Helmet } from 'react-helmet'

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/terms-and-conditions`}/>
      </Helmet> 
      <style>
      {`@media screen and (min-width: 1025px){
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
          .terms-and-condition-cover{
            min-height: 100vh;
          }
          .terms-and-condition{
            margin: 0 auto;
            max-width: 1600px;
            padding: 200px 7rem 150px 7rem;
          }
          .terms-and-condition p{
            font-family: 'Poppins', sans-serif;
            color: #333333;
            margin-top: 8px;
            font-size: 17px;
            font-weight: 400;
          }
          .terms-and-condition h1{
            font-family: 'Poppins', sans-serif;
            font-size: 42px;
            font-weight: 550;
            margin-bottom: 80px;
            margin-left: -3rem;
            color: #2c2c2c;
          }
          .terms-and-condition h2{
            font-weight: 550;
            color: #2c2c2c;
          }
        }
        @media screen and (min-width: 765px) and (max-width: 1025px){
          .terms-and-condition-cover{
            min-height: 100vh;
          }
          .terms-and-condition{
            margin: 0 auto;
            max-width: 1600px;
            padding: 9rem 3rem 150px 3rem;
          }
          .terms-and-condition p{
            font-family: 'Poppins', sans-serif;
            color: #333333;
            margin-top: 8px;
            font-size: 17px;
            font-weight: 400;
          }
          .terms-and-condition h1{
            font-family: 'Poppins', sans-serif;
            font-size: 42px;
            font-weight: 550;
            margin-bottom: 80px;
            color: #2c2c2c;
          }
          .terms-and-condition h2{
            font-weight: 550;
            color: #2c2c2c;
          }
        }
        @media screen and (max-width: 765px){
          .terms-and-condition-cover{
            min-height: 100vh;
          }
          .terms-and-condition{
            margin: 0 auto;
            max-width: 1600px;
            padding: 9rem 1.5rem 150px 1.5rem;
          }
          .terms-and-condition p{
            font-family: 'Poppins', sans-serif;
            color: #333333;
            margin-top: 8px;
            font-size: 17px;
            font-weight: 400;
          }
          .terms-and-condition h1{
            font-family: 'Poppins', sans-serif;
            font-size: 35px;
            font-weight: 550;
            margin-bottom: 80px;
            color: #2c2c2c;
          }
          .terms-and-condition h2{
            font-weight: 550;
            color: #2c2c2c;
          }
        }
      `}
    </style>
    <div className="terms-and-condition-cover">
      <div className="terms-and-condition">
      <h1>Terms and Conditions</h1>
      <br></br>
<br></br>
<h2>Introduction</h2> 
  
<p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Sedbuzz accessible at https://www.sedbuzz.com.</p>

<p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>

<p>Minors or people below 13 years old are not allowed to use this Website.</p>
<br></br>
<h2>Intellectual Property Rights</h2>

<p>Other than the content you own, under these Terms, Sedbuzz and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

<p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>
<br></br>
<h2>Restrictions</h2>

<p>You are specifically restricted from all of the following:</p>
<br></br>
<ul>
    <li>- publishing any Website material in any other media;</li>
    <li>- selling, sublicensing and/or otherwise commercializing any Website material;</li>
    <li>- publicly performing and/or showing any Website material;</li>
    <li>- using this Website in any way that is or may be damaging to this Website;</li>
    <li>- using this Website in any way that impacts user access to this Website;</li>
    <li>- using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
    <li>- engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
    <li>- using this Website to engage in any advertising or marketing.</li>
</ul>
<br></br>
<p>Certain areas of this Website are restricted from being access by you and Sedbuzz may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>
<br></br>
<h2>Your Content</h2>

<p>In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Sedbuzz a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

<p>Your Content must be your own and must not be invading any third-party's rights. Sedbuzz reserves the right to remove any of Your Content from this Website at any time without notice.</p>
<br></br>
<h2>No warranties</h2>

<p>This Website is provided "as is," with all faults, and Sedbuzz express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
<br></br>
<h2>Limitation of liability</h2>

<p>In no event shall Sedbuzz, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Sedbuzz, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
<br></br>
<h2>Indemnification</h2>

<p>You hereby indemnify to the fullest extent Sedbuzz from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
<br></br>
<h2>Severability</h2>

<p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
<br></br>
<h2>Variation of Terms</h2>

<p>Sedbuzz is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
<br></br>
<h2>Assignment</h2>

<p>The Sedbuzz is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
<br></br>
<h2>Entire Agreement</h2>
    
<p>These Terms constitute the entire agreement between Sedbuzz and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>
<br></br>
<h2>Governing Law & Jurisdiction</h2>

<p>These Terms will be governed by and interpreted in accordance with the laws of the State of in, and you submit to the non-exclusive jurisdiction of the state and federal courts located in in for the resolution of any disputes.</p>
      </div>
    </div>
    </>
  )
}
