import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `i Got The Job | ${title}`;
    }, [title])
}

export default useTitle;