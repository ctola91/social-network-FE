import { func } from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const HomePagination = (props) => {
  const { getPosts } = props;
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first onClick={getPosts} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
};

HomePagination.propTypes = {
  getPosts: func,
};

export default HomePagination;
