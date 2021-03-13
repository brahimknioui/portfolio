import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,TwitterIcon,
    TwitterShareButton,
    LinkedinIcon,
    LinkedinShareButton
    
} from "react-share";

const Footer = () => {
  return (
    <div className="footer py-5">
        <div className="container">
            <div className="row">
                {/**col info */}
                <div className="col-lg-4 col-md-6 col-sm-6">
                     {/***City */}
                    <div className="flex">
                        <p>City Joensuu ,Main str Suvikatu</p>
                    </div>
                    {/***phone */}
                    <div className="flex">
                        <p>Phone<a href="tel:555-555-555">+(358)8966521476</a></p>
                    </div>
                    {/***email */}
                    <div className="flex">
                     <p>  dawn@gmail.com</p>
                    </div>
                </div>
                   {/**col-links  */}
                   <div className="col-lg-3 col-md-2 col-sm-6">
                       <div className="row">
                           <div className="col">
                               <a href ="" lassName="footer-nav">Home</a><br/>
                               <a  href =""className="footer-nav">About</a><br/>
                               <a href =""className="footer-nav">Services</a><br/>
                           </div>
                           <div className="col">
                               <a href ="" className="footer-nav">Experience</a><br/>
                               <a href =""  className="footer-nav">Portfolio</a><br/>
                               <a href =""  className="footer-nav">Contact</a><br/>
                           </div>
                       </div>
                   </div>
                   {/**col-Sharebutton,Icons  */}
               <div className="col-lg-5 col-md-5 col-sm-6 align-items-cemter">
                   <div className="d-flex justify-content-center">
                       {/**Facebook share button */}
                       <FacebookShareButton   url={""}
                           quote={""}
                           hashtag="">       
                           <FacebookIcon className="mx-3" size={36}
                         />
                           
                       </FacebookShareButton>

                         {/**Linked in share button */}
                         <  TwitterShareButton  url={""}quote={""} hashtag="">       
                           <TwitterIcon className="mx-3" size={36}  />
                           
                        </  TwitterShareButton>


                          {/**Twiter share button */}
                          <LinkedinShareButton  url={""}quote={""} hashtag="">       
                           <LinkedinIcon className="mx-3" size={36}  />
                           
                        </LinkedinShareButton>
                   </div>
                   <p className="pt-3 text-center">Copyright&copy;{new Date().getFullYear()}&nbsp;sivu4u | All right reserved</p>

               </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
