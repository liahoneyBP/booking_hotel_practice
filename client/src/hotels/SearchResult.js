import {useState, useEffect} from 'react'
import queryString from 'query-string'
import {Link} from 'react-router-dom'
import Search from '../components/forms/Search'
import {searchListings} from '../actions/hotel'
import SmallCard from '../components/cards/SmallCard'


const SearchResult = () => {
    // state
    const [searchDate, setSearchDate] = useState('')
    const [searchTitle, setSearchTitle] = useState('')
    const [searchbed, setSearchbet] = useState('')
    const [hotels, setHotels] = useState([])

    // when component mounts, get search params from url and use to send search query to backed
    useEffect(() => {
        const{ date, bed, title} = queryString.parse(window.location.search);
       // console.log({date, bed, title});
       searchListings({date, bed, title}).then(res => {
        setHotels(res.data)
        console.log('SEARCH RESULT ====>',res.data);
       })
    },[window.location.search]);
    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
           <h2>Search Results</h2>
        </div>
        <div className='col'>
            <br/>
            <Search />
        </div>
        <div className="container">
            <div className="row">
                {
                    hotels.map(h => <SmallCard key={h._id} h={h} />)
                }
            </div>

        </div>
        </>
    )
}


export default SearchResult;