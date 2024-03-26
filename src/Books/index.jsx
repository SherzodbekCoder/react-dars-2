function Books({ data }) {
    return (
        <div>
            {data.map((book, index) => (
                <div className="card mx-auto mt-3 d-flex flex-wrap justify-content-around" style={{ width: "18rem" }} key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Name: {book.author}</h5>
                        <p className="card-text">Language: {book.language}</p>
                        <p className="card-text">Pages: {book.pages}</p>
                        <p className="card-text">Title: {book.title}</p>
                        <p className="card-text">Title: {book.year}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Books;


