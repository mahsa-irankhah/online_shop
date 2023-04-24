import React, {useEffect} from 'react';
import fetchProducts from '../../redux/products/productsAction';
import Cards from '../Cards';

//redux
import { useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

const Products = () => {

    const dispatch = useDispatch();
    const productState = useSelector((state) => state.productState);

    useEffect(() => {
      dispatch(fetchProducts());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
      <div>
        <h2 className="text-start">PRODUCT OVERVIEW</h2>

        {/* sort bar */}
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    All Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Woman
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Man
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Accessories
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>

        <Cards pState={productState} />
      </div>
    );
};

export default Products;