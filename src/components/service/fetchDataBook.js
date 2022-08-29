import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetchDataBook = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    mode: 'cors',
                    credentials: 'include'
                }, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                console.log('res:', res);

                let data = (res && res.data) ? res.data : []; // true, false
                if (data && data.length > 0 ) {
                    data.map(item => {
                        item.updatedAt = moment(item.updatedAt).format('DD/MM/YYYY, hh:mm:ss');
                        return item;
                    })
                    data = data.reverse()
                }
              
                setData(data);
                setIsLoading(false);
                setIsError(false);

            }

            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setIsError(true);
                    setIsLoading(false);
                }

            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000);

        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }

    }, [url]);
    // const fetchDataBook = () => {
    //     axios.get('http://localhost:8080/book/list')
    //         .then(function (response) {
    //             // handle success
    //             setData(response.data);
    //             console.log(">>>>>response", response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             setIsLoading(false);
    //             console.log(error);
    //             setIsError(true);
    //         })
    //         .then(function () {
    //             // always executed
    //             setIsLoading(false);
    //         });
    // }
    // useEffect(() => {
    //     fetchDataBook();
    // }, []);

    return {data, isLoading, isError};
};


export default useFetchDataBook;