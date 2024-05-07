import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Footer() {
      
    return (
        <footer className="bg-gray-900 text-white">
            <div className="flex justify-center items-center pt-2 text-gray-400 text-sm pb-8">
                <div className="flex justify-center mr-4">© 2024 All rights reserved.</div>
                <div className="flex justify-center mr-4">Holly · Bieber</div>
                <div className="flex justify-center mr-4"><FaGithub /></div>
                <div className="flex justify-center mr-4"><FaLinkedin /></div>
                <div className="flex justify-center"><MdEmail /></div>
            </div>
        </footer>
        );
    
  }