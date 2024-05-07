import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Footer() {
      
    return (
        <footer className="bg-gray-900 text-white">
            <div className="flex justify-center items-center pt-2 text-gray-400 text-sm pb-8">
                <div className="flex justify-center mr-4">© 2024 All rights reserved.</div>
                <div className="flex justify-center mr-4">Holly · Bieber</div>
                <a href="https://github.com/habieber" target="_blank">
                    <div className="flex justify-center mr-4"><FaGithub /></div>
                </a>
                <a href="https://www.linkedin.com/in/holly-bieber/" target="_blank">
                    <div className="flex justify-center mr-4"><FaLinkedin /></div>
                </a>
                <a href="mailto:habieber@gmail.com">
                    <div className="flex justify-center"><MdEmail /></div>
                </a>

            </div>
        </footer>
        );
    
  }