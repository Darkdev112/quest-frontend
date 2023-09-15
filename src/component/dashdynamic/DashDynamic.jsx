import { useEffect, useState } from "react";
import Trackquiz from "../progress/Trackquiz";
import axios from "axios";

export default function DashDynamic({ tag, projects }) {
    const [sessions, setSessions] = useState()

    const findProject = projects.find((project) => {
        return project.addiction === tag
    })

    console.log(" sessions :", tag, " ", sessions);

    const getSessions = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.get(`https://breakingfree.onrender.com/getsessions/${findProject?._id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (response.data?.sessions) {
                    setSessions(response.data.sessions)
                } else {
                    setSessions([])
                    console.log("sessions fetch failed");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSessions()
    }, [])

    return (
        <>
            {!sessions && <p>Loading...</p>}
            {sessions && <>
                <div className='track'>
                    <h2 className='header-activities'>Your Current Quiz</h2>
                    <Trackquiz tag={tag} session={sessions[sessions.length-1]}/>
                </div>
                <div className='cards'>
                    <div className="Card1">
                        <div className='Cart1c'>
                            <h4>Upcoming Quizes</h4>
                            <p>See the upcoming quizes here..</p>
                            <p>The next quiz will be on 28th Sep 23</p>
                        </div>

                        <button className="Card1b">Attempt Quiz</button>

                    </div>
                    <div className="Card2">
                        <div className='Cart2c'>
                            <h4>Quizes Attempted</h4>
                            <p>See the attempted quizes here..</p>
                            <p>Your progress is what keeps you updated</p>
                        </div>

                        <button className="Card2b">Attempted</button>

                    </div>
                    <div className="Card3">
                        <div className='Cart3c'>
                            <h4>Prevent</h4>
                            <p>Take the precautions while you can</p>
                            <p>Hop on to see the tips to prevent..</p>
                        </div>

                        <button className="Card3b">Prevent</button>

                    </div>
                </div>
                <div className='activities'>
                </div>
            </>}
        </>
    )
}