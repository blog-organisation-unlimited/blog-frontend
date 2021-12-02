import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  
  const [ posts, setPosts ] = useState([
    {
      _id: 'p1',
      author: 'Alice',
      title: 'Relations are coool',
      text:
        'Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.' +
        'Lorem ipsum. Lorem ipsum. Lorem ipsuuuuuuuuum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.' +
        'Loreeeeeeeeem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.',
      createdAt: '2021-08-010',
      stats: { likes: 5, dislikes: 1 },
      comments: [
        {
          _id: 'c1',
          author: 'Shitstormer',
          text: 'Everyone could do a blog like that, you shifty f***. Go home bro. Train more CSS. Ahahaha',
          createdAt: '2021-09-01 15:30',
          stats: { likes: 0, dislikes: 5 }
        },
        {
          _id: 'c2',
          author: 'Johnny',
          text: 'Jo Jo, keep it up',
          createdAt: '2021-09-01 16:10',
          stats: { likes: 0, dislikes: 0 }
        },
   
      ]
    },
    {
      _id: 'p2',
      author: 'Bob',
      title: 'Nesting makes sense',
      text: 'Nest me if you can. Nest me if you can. Nest me if you can. Nest me if you can. Nest me if you can.',
      createdAt: '2021-08-15',
      stats: { likes: 1, dislikes: 0 },
      comments: [
        {
          _id: 'c3',
          author: 'Fanboy',
          text: 'So great stuff',
          createdAt: '2021-09-02 01:00',
          stats: { likes: 17, dislikes: 1 }
        }
     
      ]
    },
    {
      _id: 'p3',
      author: 'Peter',
      title: "I don't mind backend...",
      text: 'Fuck all that shit. I go back to the frontend',
      createdAt: '2021-09-13',
      comments: [],
      stats: { likes: 2, dislikes: 1 }
    }
  ]);

  // TODO: Load Data on startup in useEffect

  const addPost = (postNew) => {
    setPosts([ ...posts, postNew ]);
  };
  const updatePost = (postUpdated) => {
    setPosts(posts.map((post) => (post._id === postUpdated._id ? { ...postUpdated } : post)));
  };
  const deletePost = (postToDelete) => {
    setPosts(posts.filter((post) => post._id !== postToDelete._id));
  };

  const sharedData = {
    posts,
    setPosts,
    addPost,
    updatePost,
    deletePost,
  };

  return <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>;
};

export default DataProvider;
