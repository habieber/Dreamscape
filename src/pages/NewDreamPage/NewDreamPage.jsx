import { useState, useRef } from 'react';
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
        const addDream = await notesAPI.addNote({text: text, image: image_url})

    }

    async function handleSaveDreamImage() {
        // try {
        //     if (inputRef.current.value === '') {
        //         return;
        //     }
            
        //     // Convert image_url to base64
        //     const base64Image = await convertImageUrlToBase64(image_url);
    
        //     const text = inputRef.current.value;
        //     await notesAPI.addNote({ text: text, image: base64Image });
        //     // image: base64Image -----> this was added to also send the image data
    
        //     // Clear input field and reset image_url
        //     inputRef.current.value = '';
        //     setImage_url('/');
        // } catch (error) {
        //     console.error('Error saving dream text and image:', error);
        // }
    }
    
    async function convertImageUrlToBase64(image_url) {
        // const response = await notesAPI.fetchImage(image_url);
        // const blob = await response.blob();

        // const jpegBlob = new Blob([blob], { type: 'image/jpeg' });
        // return new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.onloadend = () => resolve(reader.result);
        //     reader.onerror = reject;
        //     reader.readAsDataURL(jpegBlob);
        // });
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
                    <button className={(!user || image_url === '/') ? 'display-none' : "generate-btn"} onClick={()=>(handleSaveDream())}>Save Dream Text</button>
                    {/* <button className={(!user || image_url === '/') ? 'display-none' : "generate-btn"} onClick={()=>(handleSaveDreamImage())}>Save Dream Text & Image</button> */}

                    <br />
                    <div className="search-box">
                        <textarea type="text" ref={inputRef} className='search-input' placeholder='describe your dream' />
                        <button className='generate-btn' onClick={()=>{imageGenerator()}}>
                            {image_url === '/' ? 'Generate' : 'Re-generate'}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}