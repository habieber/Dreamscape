import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';

export default function DreamDetailPage({ user }) {
    const [dream, setDream] = useState(null);
    let { id } = useParams()
    console.log(id)

    console.log(dream)
    useEffect(() => {
        async function fetchDream() {
            try {
                const fetchedDream = await notesAPI.getById(id);
                setDream(fetchedDream);
            } catch (error) {
                console.error('Error fetching dream:', error);
            }
        }

        if (id) {
            fetchDream();
        }
        
    }, [id]);

    return (
        <div>
            <h2>{user.name}'s Dream Details</h2>
            {dream ? (
                <>
                    <p>Description: {dream.text}</p>
                    <p>Created At: {dream.createdAt}</p>
                </>
            ) : (
                <p></p>
            )}
        </div>
    );
}
