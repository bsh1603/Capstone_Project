import React, { Component } from "react";
import ItemsDataService from "../services/Item.service";
import { Routes, Route, Link } from "react-router-dom";
import AddItem from "./add-inventory.component";
import Item from "./inventory.component";

export default class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveItems = this.retrieveItems.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveItems = this.setActiveItems.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      Items: [],
      currentItems: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveItems();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveItems() {
    ItemsDataService.getAll()
      .then(response => {
        this.setState({
          Items: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveItems();
    this.setState({
      currentItems: null,
      currentIndex: -1
    });
  }

  setActiveItems(Items, index) {
    this.setState({
      currentItems: Items,
      currentIndex: index
    });
  }

  removeAllItems() {
    ItemsDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentItems: null,
      currentIndex: -1
    });

    ItemsDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          Items: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, Items, currentItems, currentIndex } = this.state;

    return (
      <>
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4> Item List</h4>

          <ul className="list-group">
            {Items &&
              Items.map((Items, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveItems(Items, index)}
                  key={index}
                >
                  {Items.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllItems}
          >
            delete All
          </button>
        </div>
        <div className="col-md-6">
          {currentItems ? (
            <div>
              <h4>Items</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentItems.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentItems.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentItems.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/Items/" + currentItems.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a item...</p>
            </div>
          )}

          
        </div>
      </div>
      <li className="nav-item">
              <Link to={"/home/item/add"} className="nav-link">
                
                Add 재고
              </Link>

              <Link to={"/home/item/:id"} className="nav-link"></Link>
            </li>
      
        <Routes>
      
            <Route path="/home/item/add" element={<AddItem />} /> 
            <Route path="/home/item/:id" element={<Item/>}  /> 
        </Routes>
    
    </>
    );
  }
}