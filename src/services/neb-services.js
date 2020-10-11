
class NebService {

    _HOST = 'https://neb-chr.ru/api/';

    get = (url) => {
        return await axios.get('https://neb-chr.ru/api/books/lasted').then(books => {
            setLoading(true);
            setBooks(books.data);
        }).catch(err => {
            setError(err);
            setLoading(true);
        });
    }

}