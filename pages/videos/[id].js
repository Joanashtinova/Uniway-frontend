import React from 'react';
import { useRouter } from 'next/router';

function Video() {
    const router = useRouter();
    return <p>Title: {router.query.id}</p>;
}  