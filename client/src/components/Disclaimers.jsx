import React from 'react'
import { Helmet } from 'react-helmet'

export default function Disclaimers() {
  return (
    <>
      <Helmet>
        <title>Disclaimers | SedBuzz</title> 
        <meta property="og:site_name" content="sedbuzz"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Ffavicon.png?alt=media&token=3dc3cdc6-28dc-427e-95a9-654983d55055"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://www.sedbuzz.com/disclaimers`}/>
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
          .disclaimers-cover{
            min-height: 100vh;
          }
          .disclaimers{
            margin: 0 auto;
            max-width: 1600px;
            padding: 200px 7rem 150px 7rem;
          }
          .disclaimers p{
            font-family: 'Poppins', sans-serif;
            color: #333333;
            margin-top: 8px;
            font-size: 17px;
            font-weight: 400;
          }
          .disclaimers h1{
            font-family: 'Poppins', sans-serif;
            font-size: 42px;
            font-weight: 550;
            margin-bottom: 80px;
            margin-left: -3rem;
            color: #2c2c2c;
          }
          .disclaimers h2{
            font-weight: 550;
            color: #2c2c2c;
          }
        }
        @media screen and (min-width: 765px) and (max-width: 1025px){
          .disclaimers-cover{
            min-height: 100vh;
          }
          .disclaimers{
            margin: 0 auto;
            max-width: 1600px;
            padding: 9rem 3rem 150px 3rem;
          }
          .disclaimers p{
            font-family: 'Poppins', sans-serif;
            color: #333333;
            margin-top: 8px;
            font-size: 17px;
            font-weight: 400;
          }
          .disclaimers h1{
            font-family: 'Poppins', sans-serif;
            font-size: 42px;
            font-weight: 550;
            margin-bottom: 80px;
            color: #2c2c2c;
          }
          .disclaimers h2{
            font-weight: 550;
            color: #2c2c2c;
          }
        }
        @media screen and (max-width: 765px){
          .disclaimers-cover{
            min-height: 100vh;
          }
          .disclaimers{
            margin: 0 auto;
            max-width: 1600px;
            padding: 9rem 1.5rem 150px 1.5rem;
          }
          .disclaimers p{
            font-family: 'Poppins', sans-serif;
            color: #333333;
            margin-top: 8px;
            font-size: 17px;
            font-weight: 400;
          }
          .disclaimers h1{
            font-family: 'Poppins', sans-serif;
            font-size: 35px;
            font-weight: 550;
            margin-bottom: 80px;
            color: #2c2c2c;
          }
          .disclaimers h2{
            font-weight: 550;
            color: #2c2c2c;
          }
        }
      `}
    </style>
    <div className="disclaimers-cover">
      <div className="disclaimers">
        <h1>Disclaimers</h1>
        <br></br><br></br>
        <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at&nbsp;<a className='underline' href='mailto:shivshank019@gmail.com'>shivshank019@gmail.com</a>.</p>
        <br></br>
        <p>All the information on this website - https://www.sedbuzz.com - is published in good faith and for general information purpose only. Sedbuzz does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Sedbuzz), is strictly at your own risk. Sedbuzz will not be liable for any losses and/or damages in connection with the use of our website.

        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.

        Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>
        <br></br>

        <h2>Consent</h2>
        <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
        <br></br>
        
        <h2>Update</h2>
        <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
      </div>
    </div>
    </>
  )
}
