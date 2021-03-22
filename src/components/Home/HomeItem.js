import { object } from 'prop-types';
import { Card, CardBody, CardText } from 'reactstrap';

const HomeItem = ({ post }) => (
  <Card>
    <CardBody>
      <CardText>{post.description}</CardText>
    </CardBody>
  </Card>
);

HomeItem.propTypes = {
  post: object,
};

export default HomeItem;
