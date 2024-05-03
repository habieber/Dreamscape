import { useEffect, useState, useRef } from 'react';
import * as notesAPI from '../../utilities/notes-api'
import './NewDreamPage.css'

export default function NewDreamPage ({ user }) {
    const [image_url, setImage_url] = useState('/')
    let inputRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const default_img = 'https://th.bing.com/th/id/OIG3.mrzboNyzN9SAtffiVH46?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'


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

    async function handleSaveDream() {
        if (inputRef.current.value === '') {
            return 0;
        }
        const text = inputRef.current.value
        const addDream = await notesAPI.addNote({text})

    }
    
    return (
        <>
        <div className='form-container'>
            <div className='ai-image-generator'>
                <div className="header">Dream Generator</div>
                <div className='img-loading'>
                    <div className="image"><img src={image_url === '/' ? default_img : image_url} alt="..." /></div>
                    <div className="loading">
                        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                        <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
                    </div>
                    <div className={(!user || image_url === '/') ? 'display-none' : "generate-btn"} onClick={()=>(handleSaveDream())}>Save Dream Text</div>
                    <div className="search-box">
                        <input type="text" ref={inputRef} className='search-input' placeholder='describe your dream' />
                        <div className='generate-btn' onClick={()=>{imageGenerator()}}>
                            {image_url === '/' ? 'Generate' : 'Re-generate'}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}