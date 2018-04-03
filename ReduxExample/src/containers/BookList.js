import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreator } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => {
            this.props.selectBook(book);
          }}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
};

// Anything returned in this function will end up as props inside of
// BookList container.
const mapDispatchToProps = (dispatch, ownProps) => {
  // Whenever selectBook is called, the result should be passed to all
  // reducers.
  return { selectBook: (book) => dispatch(selectBook(book)) };
};

// Promote book list from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
