import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';

export default function DreamDetailPage({ user }) {
    const [dream, setDream] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState('')
    let { id } = useParams()
    

    console.log(dream)
    useEffect(() => {
        async function fetchDream() {
            try {
                const fetchedDream = await notesAPI.getById(id);
                setDream(fetchedDream);
                setEditedText(fetchedDream.text);
            } catch (error) {
                console.error('Error fetching dream:', error);
            }
        }

        if (id) {
            fetchDream();
        }
        
    }, [id]);

    function handleEdit() {
        setEditMode(true);
    }

    async function handleSave() {
        try {
            await notesAPI.updateDream(id, {editedText})
            setDream(prevDream => ({
                ...prevDream,
                text: editedText
            }));
            setEditMode(false);
        } catch (err) {
            console.error('Error updating dream:', err)
        }
    }

    function handleCancel() {
        setEditMode(false);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substr(-2)}`;
    };

    return (
        <div className='form-container'>
            {dream && !editMode ? (
                <>
                    <h2 className='header'>{formatDate(dream.createdAt)}</h2>
                    <p>Description: {dream.text}</p>
                    <button className='rounded-full' onClick={handleEdit}>Edit</button>
                </>
            ) : (
                editMode ? (
                    <>
                        <h2 className='header'>Edit Dream From {formatDate(dream.createdAt)}</h2>
                        <textarea className="rounded-lg border border-gray-300 p-2 h-40 w-1/2 text-black" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                        <button className='rounded-full' onClick={handleSave}>Save</button>
                        <button className='rounded-full' onClick={handleCancel}>Cancel</button>
                    </>
                ) : null
            )}
        </div>
    );
}
