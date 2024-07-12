import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const BlogPostManager = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('http://localhost:3001/posts', { title, content });
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const updatePost = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/posts/${id}`, { title, content });
      setPosts(posts.map(post => post.id === id ? response.data : post));
      setEditingPost(null);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post.id);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      updatePost(editingPost);
    } else {
      createPost();
    }
  };

  return (
    <div>
      <h1>Blog Post Manager</h1>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
          />
          <button type="submit">{editingPost ? 'Update Post' : 'Create Post'}</button>
        </form>
      ) : (
        <p>Please log in to manage blog posts.</p>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {isAuthenticated && (
              <>
                <button onClick={() => handleEdit(post)}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostManager;
