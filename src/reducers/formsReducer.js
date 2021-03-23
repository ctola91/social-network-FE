import { createForms } from 'react-redux-form';

const initialForm = {
  title: '',
  description: '',
  user: '',
  comments: [],
};

export default function formsReducer() {
  return createForms({
    postForm: initialForm,
  });
}
