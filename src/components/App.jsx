import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Loader } from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ marginLeft: '10px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      {items.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <ContactFilter />
          <ContactList />{' '}
        </>
      ) : null}
      {isLoading && <Loader />}
    </div>
  );
};
