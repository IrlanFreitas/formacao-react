import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { getData } from "../services/api";

export default function useData(url) {

    const history = useHistory()

    const [data, setData] = useState([])

    useEffect(() => {
        setData([])
        getData(url, setData)
            .catch(() => {
                history.push('/NotFound')
            })
    }, [setData, url, history])

    return {
        data
    }
}