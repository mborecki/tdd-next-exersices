"use client"

import { usePost } from "./use-post";

export function PostWidget() {
    const { data } = usePost('1');

    return <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
    </div>
}
