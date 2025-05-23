// import axios from 'axios';

// const BASE_URL = 'https://gutendex.com/books/';

// export const fetchBooks = async (page = 1, topic = '') => {
//   try {
//     const response = await axios.get(`${BASE_URL}?page=${page}&search=${topic}`);

//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     return [];
//   }
// };
export const fetchBooks = async (page = 1, subject = 'fiction') => {
  try {
    const res = await fetch(`https://gutendex.com/books/?page=${page}&topic=${subject}`);
    const data = await res.json();
    return data.results.map(book => ({
      id: book.id,
      title: book.title,
      author: book.authors?.[0]?.name || 'Unknown Author',
      subject,
      cover: book.formats['image/jpeg'],
      detail: book.formats['text/html'] || book.formats['text/plain']
    }));
  } catch (err) {
    console.error('Error fetching books:', err);
    return [];
  }
};