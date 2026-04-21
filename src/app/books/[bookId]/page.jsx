import Link from "next/link";

export const generateStaticParams = async()=>{
    const res = await fetch('http://localhost:5000/books')
    const books= await res.json();

    return books.slice(1,3).map(book=>({bookId:book.id}))
}

const BookDeteisPage = async({params}) => {
    const {bookId}= await params;
    const res= await fetch(`http://localhost:5000/books/${bookId}`);
    const {title,author,published,category,price} =await res.json();

    return (
        <div>
          <p>Name : {title}</p>  
          <p>Name of Writer : {author}</p>  
          <p>Category : {category}</p>  
          <p>Date of published : {published}</p>  
          <p>Price : {price}</p>  
          <Link href={'/books'}><button className="btn btn-primary">Back to Books</button></Link>
        </div>
    );
};

export default BookDeteisPage;