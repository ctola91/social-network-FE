import { func, number } from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { itemsPerPage } from '../../shared/utils/constants';

import './HomePagination.css';

const HomePagination = (props) => {
  const { fetchPosts, total } = props;
  const paginationItems = [];
  let page = 1;
  let counter = 0;
  while (counter < total) {
    const pages = counter;
    paginationItems.push(
      <PaginationItem>
        <PaginationLink onClick={() => fetchPosts(pages, itemsPerPage)}>{page}</PaginationLink>
      </PaginationItem>
    );
    counter += itemsPerPage;
    page += 1;
  }
  return (
    <div className="HomePagination">
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first onClick={() => fetchPosts(0, itemsPerPage)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {paginationItems}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

HomePagination.propTypes = {
  fetchPosts: func,
  total: number,
};

export default HomePagination;
