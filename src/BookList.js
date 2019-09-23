import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookRow from "./BookRow";
import BookTable from "./BookTable";

class BookList extends Component {
    state = {
        filteredBooks: this.props.books
    };

    filterBooks = query => {
        query = query.toLowerCase();
        let filteredBooks = this.props.books.filter(book =>
            `${book.title}`.toLowerCase().includes(query)
        );
        this.setState({ filteredBooks: filteredBooks });
    };

    render() {


        const color = this.props.match.params.BookColor
        let books = this.state.filteredBooks

        // if a color was passed filter the books by the this color 
        if (color) {
            books = books.filter(book => book.color === color)
        }
        return (
            <div>
                <h3>Books</h3>
                <SearchBar onChange={this.filterBooks} />
                <BookTable books={books} />

            </div>
        );
    }
}

export default BookList;
