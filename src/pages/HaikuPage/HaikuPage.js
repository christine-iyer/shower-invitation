import { useState, useEffect } from 'react';
import CreateHaiku from '../../components/HaikuPage/CreateHaiku';
import styles from './HaikuPage.module.scss';

function HaikuPage() {
  const [haikus, setHaikus] = useState([]); // All haikus
  const [filteredHaikus, setFilteredHaikus] = useState([]); // Filtered haikus
  const [filter, setFilter] = useState(''); // Current filter (author)
  const [haiku, setHaiku] = useState({
    author: '',
    one: '',
    two: '',
    three: '',
    like: 0
  });
  const [editHaiku, setEditHaiku] = useState(null); // Haiku being edited

  // Fetch haikus from the API on component mount
  useEffect(() => {
    const fetchHaikus = async () => {
      try {
        const response = await fetch('/api/haikus');
        const data = await response.json();
        setHaikus(data);
        setFilteredHaikus(data); // Initially show all haikus
      } catch (error) {
        console.error('Error fetching haikus:', error);
      }
    };

    fetchHaikus();
  }, []);

  // Handle creating a new haiku
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
      setFilteredHaikus([data, ...haikus]); // Update filtered list
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

  // Handle editing a haiku
  const updateHaiku = async (id, updatedHaiku) => {
    try {
      const response = await fetch(`/api/haikus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedHaiku)
      });
      const data = await response.json();

      // Update the haikus state
      const updatedHaikus = haikus.map((h) =>
        h._id === id ? { ...h, ...data } : h
      );
      setHaikus(updatedHaikus);
      setFilteredHaikus(updatedHaikus); // Update filtered list
      setEditHaiku(null); // Close the edit form
    } catch (error) {
      console.error('Error updating haiku:', error);
    }
  };

  // Handle deleting a haiku
  const deleteHaiku = async (id) => {
    try {
      await fetch(`/api/haikus/${id}`, {
        method: 'DELETE'
      });

      // Update the haikus state
      const updatedHaikus = haikus.filter((h) => h._id !== id);
      setHaikus(updatedHaikus);
      setFilteredHaikus(updatedHaikus); // Update filtered list
    } catch (error) {
      console.error('Error deleting haiku:', error);
    }
  };

  // Handle filtering haikus by author
  const handleFilterChange = (event) => {
    const selectedAuthor = event.target.value;
    setFilter(selectedAuthor);

    if (selectedAuthor === '') {
      // Show all haikus if no filter is selected
      setFilteredHaikus(haikus);
    } else {
      // Filter haikus by the selected author
      const filtered = haikus.filter((h) => h.author === selectedAuthor);
      setFilteredHaikus(filtered);
    }
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

      {/* Filter Dropdown */}
      <div className={styles.filterContainer}>
        <label htmlFor="authorFilter">Filter by Author:</label>
        <select
          id="authorFilter"
          value={filter}
          onChange={handleFilterChange}
          className={styles.filterSelect}
        >
          <option value="">All Authors</option>
          {[...new Set(haikus.map((h) => h.author))].map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      {/* List of Haikus */}
      <div className={styles.haikuList}>
        {filteredHaikus.length > 0 ? (
          filteredHaikus.map((haiku) => (
            <div key={haiku._id} className={styles.haikuCard}>
              {editHaiku && editHaiku._id === haiku._id ? (
                // Edit Form
                <div>
                  <input
                    type="text"
                    value={editHaiku.one}
                    onChange={(e) =>
                      setEditHaiku({ ...editHaiku, one: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editHaiku.two}
                    onChange={(e) =>
                      setEditHaiku({ ...editHaiku, two: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editHaiku.three}
                    onChange={(e) =>
                      setEditHaiku({ ...editHaiku, three: e.target.value })
                    }
                  />
                  <button
                    onClick={() => updateHaiku(haiku._id, editHaiku)}
                    className={styles.saveButton}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditHaiku(null)}
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                // Display Haiku
                <div>
                  <p>{haiku.one}</p>
                  <p>{haiku.two}</p>
                  <p>{haiku.three}</p>
                  <h6>by {haiku.author}</h6>
                  <button
                    onClick={() => setEditHaiku(haiku)}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHaiku(haiku._id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No haikus available. Create one to get started!</p>
        )}
      </div>
    </div>
  );
}

export default HaikuPage;