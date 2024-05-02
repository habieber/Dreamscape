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

    return (
        <div>
            <h2>{user.name}'s Dream Details</h2>
            {dream && !editMode ? (
                <>
                    <p>Description: {dream.text}</p>
                    <p>Created At: {dream.createdAt}</p>
                    <button onClick={handleEdit}>Edit</button>

                </>
            ) : (
                editMode ? (
                    <>
                        <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </>
                ) : null
            )}
        </div>
    );
}
