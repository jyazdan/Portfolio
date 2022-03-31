import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <GrDocumentPdf />
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/jonathan-yazdanpanah"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a 
          href="https://github.com/jyazdan" 
          target="_blank" 
          rel="noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
