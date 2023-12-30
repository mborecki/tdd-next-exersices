import { useCallback, useRef } from "react"

interface Props {
    onSearch?(query?: string): void
}

export default function Search({onSearch}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = useCallback(() => {
        if (onSearch) {
            onSearch(inputRef.current?.value);
        }
    }, [onSearch]);

    return <>
        <input type="search" ref={inputRef} />
        <button onClick={onClick}>Szukaj</button>
    </>
}
