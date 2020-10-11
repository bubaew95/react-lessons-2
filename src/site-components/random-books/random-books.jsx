import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from '../../components/loading';
import Items from '../../components/items';

const RandomBooks = props => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [books, setBooks] = useState(null);

    const getBooks = async () => {
        return await axios.get('https://neb-chr.ru/api/books').then(books => {
            setLoading(true);
            setBooks(books.data);
        }).catch(err => {
            setError(err);
            setLoading(true);
        });
    }

    useEffect(() => {
        getBooks();
    }, [])

    if (!loading) return (<div className="col-lg-12"><Loading /></div>)

    if (!books) return null;

    return (
        <div className="col-lg-12" style={{ transition: '.3s' }}>
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                    <div className="iq-header-title">
                        <h4 className="card-title mb-0">Случайные книги</h4>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                        <a href="category.html" className="btn btn-sm btn-primary view-more">Все книги</a>
                    </div>
                </div>
                <div className="iq-card-body">
                    <div className="row">

                        <Items items={books} />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default RandomBooks;