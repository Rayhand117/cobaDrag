import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './Styletabelnya.css'

const API = 'https://api.currencyfreaks.com/latest?apikey=5591d62b79c0498f8c158e1f3276df5b&symbols=CAD,EUR,IDR,JPY,CHF,GBP,USD'
function Halu() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const getCurrency = async () => {
            try {
                const res = await axios.get(API)
                setData(res.data)
            } catch (error) { }
        }
        getCurrency()
    }, [])

    return (
        <div className='tabelnya'>
            <table>
                <thead>
                    <tr className='sub'>
                        <td>Currency</td>
                        <td>We Buy</td>
                        <td>Exchange Rate</td>
                        <td>We Sell</td>
                    </tr>
                </thead>
                <tbody>
                    {data.rates && Object.keys(data.rates).map((key, index) => (
                        <tr className='tabeldata' key={index}>
                            <td> {key} </td>
                            <td> {
                                    (parseFloat(data.rates[key]) + data.rates[key] * 0.05).toFixed(6)
                                }
                            </td>
                            <td> {
                                    parseFloat(data.rates[key]).toFixed(6)
                                }
                            </td>
                            <td> {
                                    (parseFloat(data.rates[key]) - data.rates[key] * 0.05).toFixed(6)
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='rates'>
                Rates are based from 1 USD
            </div>
            <div className='rates'>
                This application uses API from https://currencyfreaks.com
            </div>
        </div>
    )
}

export default Halu;
