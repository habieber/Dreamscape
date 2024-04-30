import { useEffect, useState, useRef } from 'react';
import * as notesAPI from '../../utilities/notes-api'
import './NewDreamPage.css'
import OpenAI from 'openai';

export default function NewDreamPage ({ user }) {
    const [image_url, setImage_url] = useState('/')
    let inputRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const default_img = 'https://as1.ftcdn.net/v2/jpg/01/78/32/42/1000_F_178324261_vmmNtnD12a8VMhhjLicFdfLVIRE3DZEy.jpg'



    const imageGenerator = async () => {
        if (inputRef.current.value === '') {
            return 0;
        }
        setLoading(true)
        const prompt = inputRef.current.value
        const response = await notesAPI.getImage({prompt})
        
        let data = response.data[0].url
        console.log(data)
        setImage_url(data)
        setLoading(false)
    }
    
    return (
        <>
            <div className='ai-image-generator'>
                <div className="header">Dreamscape Image <span>Generator</span></div>
                <div className='img-loading'>
                    <div className="image"><img src={image_url === '/' ? default_img : image_url} alt="..." /></div>
                    <div className="loading">
                        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                        <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
                    </div>
                    
                    <div className="search-box">
                        <input type="text" ref={inputRef} className='search-input' placeholder='describe your dream' />
                        <div className='generate-btn' onClick={()=>{imageGenerator()}}>Generate</div>
                    </div>
                </div>
            </div>
        </>

    )
}