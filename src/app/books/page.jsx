import BookCard from "@/components/Book/BookCard";


const BooksPage =async () => {
    const res= await fetch('http://localhost:5000/books',{next : {revalidate : 20}})
    const books= await res.json();
    return (
        <div>
           <h1>Books : {books.length}</h1> 
           <div className="grid grid-cols-3 gap-3">
            {
                books.map(book => <BookCard key={book.id} book={book}></BookCard>)
            }
           </div>
        </div>
    );
};

export default BooksPage;