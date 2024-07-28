import axios from '../../api/laravel'
import React, { useEffect } from 'react'

function Message() {
    const fetchData = async () => {
        try {
            const res = await axios.get('test');
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>Message</div>
    )
}

export default Message