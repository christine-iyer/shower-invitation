import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateHaiku from '../../components/HaikuPage/CreateHaiku';
import HaikuCard from '../../components/HaikuPage/HaikuCard';
import styles from './HaikuPage.module.scss';

function HaikuPage() {
  const [haiku, setHaiku] = useState({
    author: '',
    one: '',
    two: '',
    three: '',
    like: 0
  });
  const [haikus, setHaikus] = useState([]);
  const [editHaiku, setEditHaiku] = useState(null); // Track the haiku being edited
  const [showEditModal, setShowEditModal] = useState(false); // Track if the edit modal is open

  // Fetch haikus from the API on component mount
  useEffect(() => {
    const fetchHaikus = async () => {
      try {
        const response = await fetch('/api/haikus');
        const data = await response.json();
        setHaikus(data);
      } catch (error) {
        console.error('Error fetching haikus:', error);
      }
    };
  
    fetchHaikus();
  }, []);

  const createHaiku = async () => {
    try {
      const response = await fetch('/api/haikus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...haiku })
      });
      const data = await response.json();
      setHaikus([data, ...haikus]);
    } catch (error) {
      console.error(error);
    } finally {
      setHaiku({
        author: '',
        one: '',
        two: '',
        three: '',
        like: 0
      });
    }
  };

  const updateHaiku = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      const data = await response.json();
      const haikusCopy = [...haikus];
      const index = haikusCopy.findIndex((haiku) => id === haiku._id);
      haikusCopy[index] = { ...haikusCopy[index], ...updatedData };
      setHaikus(haikusCopy);
      setShowEditModal(false); // Close the edit modal
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (haiku) => {
    setEditHaiku(haiku); // Set the haiku to be edited
    setShowEditModal(true); // Open the edit modal
  };

  return (
    <div className={styles.haikuPage}>
      <h1>Haiku Collection</h1>
  
      {/* Create Haiku Form */}
      <CreateHaiku
        createHaiku={createHaiku}
        haiku={haiku}
        handleChange={(event) =>
          setHaiku({ ...haiku, [event.target.name]: event.target.value })
        }
      />
  
      {/* List of Haikus */}
      <div className={styles.haikuList}>
        {haikus.length > 0 ? (
          haikus.map((haiku) => (
            <HaikuCard
              key={haiku._id}
              haiku={haiku}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <p>No haikus available. Create one to get started!</p>
        )}
      </div>
  
      {/* Edit Modal */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        className={styles.haikuModal}
      >
        <Modal.Body>
          <CreateHaiku
            createHaiku={() => updateHaiku(editHaiku._id, editHaiku)}
            haiku={editHaiku}
            handleChange={(event) =>
              setEditHaiku({ ...editHaiku, [event.target.name]: event.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HaikuPage;