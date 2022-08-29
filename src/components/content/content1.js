import React, { useState, useEffect } from "react";
import '../../App.css'
import useFetch from "../customize/fetch";
import moment from "moment";

const Content1 = () => {
    // const [dataCovid, setDataCovid] = useState([]);
    // const [loading, setLoading] = useState(true);
    const today = moment().startOf('day').toISOString(true);;
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    const { data: dataCovid, isLoading, isError }
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)
    
       

    return (
        <div className=" h-screen flex-1 p-7  ">
            <h2>Table Covid VietNam:</h2>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((item) => {
                        return (
                            < tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Active}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                            </tr>
                        )
                    })}

                    {isLoading === true &&
                        <tr>
                            <td colSpan={'5'} className='text-center'>Loading...</td>
                        </tr>
                    }

                    {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div >

    );
}

export default Content1;