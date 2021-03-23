import { object } from 'prop-types';
import { Card, CardImg, CardBody, CardText, Button, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

import './HomeListItem.css';

const HomeListItem = ({ post }) => (
  <Card className="HomeListItem">
    <CardImg top width="100%" src="https://picsum.photos/200/150" alt="Post Image" />
    <CardBody>
      <CardText>{post.description}</CardText>
    </CardBody>
    <CardFooter>
      <Button>
        <FontAwesomeIcon icon={faThumbsUp} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faComment} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faShare} />
      </Button>
    </CardFooter>
  </Card>
);

HomeListItem.propTypes = {
  post: object,
};

export default HomeListItem;
