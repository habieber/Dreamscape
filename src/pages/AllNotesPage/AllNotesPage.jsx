import './AllNotesPage.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import * as notesAPI from '../../utilities/notes-api'

export default function AllNotesPage ({ user }) {
    const [text, setText] = useState({text: ''});
    const [allNotes, setAllNotes] = useState([]);

    async function getAllNotes() {
        try {
            const notes = await notesAPI.getAllNotes();
            setAllNotes(notes);
        } catch (error) {
            console.error('Error fetching dreams:', error);
        }
    }

    useEffect(() => {
        getAllNotes();
    }, []);

    async function handleAddNote (evt) {
        evt.preventDefault();
        const addNote = await notesAPI.addNote(text)
        setAllNotes([...allNotes, addNote]);
        setText({text: ''});
    }

    const handleChange = (evt) => {
        setText({[evt.target.name]: evt.target.value});
    }
    
    async function handleDeleteNote (noteId) {
        try {
            await notesAPI.deleteNote(noteId);
            setAllNotes(allNotes.filter(note => note._id !== noteId));
        } catch (err) {
            console.error('Error deleting note:', err)
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substr(-2)}`;
    };

    return (
        <>
            <div className='form-container md:container md:mx-auto px-4'>
                <div className='header'>Describe A Dream</div>
                <form onSubmit={handleAddNote}>
                    <input type="text" name="text" value={text.text} onChange={handleChange} />
                    <button className='button btn-sm' type="submit">Save Dream</button>
                </form>
            </div>
            <hr className='divider'/>
            <div className='form-container md:container md:mx-auto px-4'>
                <h1 className='header'>{user.name}'s Dream Journal</h1>
                {allNotes.length ?
                    <ul>
                        {allNotes.map(note => (
                            <li key={note._id}> 
                                <div className="flex items-center justify-between"> {/* Wrap buttons with flex container */}
                                    <span className='text-white'>{formatDate(note.createdAt)}: {note.text}</span> 
                                    <div>
                                        <button><Link to={`/${note._id}`}>Details</Link></button>
                                        <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    :
                    <p>No dreams available.</p>
                }            
            </div>         


        </>

    )
}