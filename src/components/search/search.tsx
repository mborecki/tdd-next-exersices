import { useCallback, useRef } from "react"

interface Props {
    onSearch?(query?: string): void,
    label?: string
}

export default function Search({ onSearch, label }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = useCallback(() => {
        if (onSearch) {
            onSearch(inputRef.current?.value);
        }
    }, [onSearch]);

    return <>
        {label && <p>{label}</p>}
        <input type="search" ref={inputRef} />
        <p>fsfsfsrfsfsrgrsg</p>
        <button onClick={onClick}>Szukaj</button>
    </>
}
