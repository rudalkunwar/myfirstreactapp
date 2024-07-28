import React, { useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from '../../api/laravel'; // Ensure this path is correct

const PusherComponent = () => {
    const fetchData = async () => {
        try {
            const res = await axios.get('/trigger-event'); // Make sure the endpoint is correct
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
        // Enable Pusher logging - don't include this in production
        Pusher.logToConsole = true;

        const pusher = new Pusher('2114b899ed9e3f32a6ee', {
            cluster: 'mt1',
            encrypted: true
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            alert(JSON.stringify(data));
        });

        // Cleanup on unmount
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    return (
        <div>
            <h1>Pusher Test</h1>
            <p>
                Try publishing an event to channel <code>my-channel</code> with event name <code>my-event</code>.
            </p>
        </div>
    );
};

export default PusherComponent;
