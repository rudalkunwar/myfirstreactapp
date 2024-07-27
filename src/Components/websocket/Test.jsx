import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

function Data() {
    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1/api/test', { message: "hello" })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });
    }
    return <div>
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name='text' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
}
const Test = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const pusher = new Pusher('2114b899ed9e3f32a6ee', {
            cluster: 'mt1',
        });

        const channel = pusher.subscribe('messages');

        channel.bind('MessageSent', (data) => {
            console.log(`Received message: ${data.message}`);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        });

        return () => {
            channel.unbind_all();
            pusher.disconnect();
        };
    }, []);

    const handleSendMessage = (event) => {
        // event.preventDefault();
        // const message = newMessage.trim();
        // if (message !== '') {
        //     // Send the message to your Laravel API using Axios
        //     axios.post('http://127.0.0.1/api/send-message', { message })
        //         .then((response) => {
        //             console.log(response.data);
        //             setNewMessage('');
        //         })
        //         .catch((error) => {
        //             console.error('Error sending message:', error);
        //         });
        // }
    };

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };



    return (
        <div>
            {/* <h1>Real-time Messaging App</h1>
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul> */}
            <Data />


        </div>
    );
};

export default Test;



