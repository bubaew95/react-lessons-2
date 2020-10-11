import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '../../components/loading';

const HeadSlider = props => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [books, setBooks] = useState(null);

    const getBooks = async () => {
        return await axios.get('https://neb-chr.ru/api/books/lasted').then(books => {
            setLoading(true);
            console.log('books', books)
            setBooks(books.data);
        }).catch(err => {
            setError(err);
            setLoading(true);
        });
    }

    useEffect(() => {
        getBooks();
    }, []);

    if (!loading) return (<div className="col-lg-12"><Loading /></div>)

    if (!books) return null;
    // console.log('bo', books)
    return (
        <div className="col-lg-12">
            <div className="iq-card-transparent iq-card-block iq-card-stretch iq-card-height rounded">
                <div className="newrealease-contens">
                    <ul id="newrealease-slider" className="list-inline p-0 m-0 d-flex align-items-center">

                        {
                            books.map(item => (
                                <li className="item" key={item.id}>
                                    <a href="#">
                                        <img src={item.coverImage} className="img-fluid w-100 rounded" alt="" />
                                    </a>
                                </li>
                            ))
                        }



                    </ul>
                </div>
            </div>
        </div>
    )

}

export default HeadSlider;