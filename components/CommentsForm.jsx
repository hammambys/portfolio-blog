import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  return (
    <div className="bg-white dark:bg-[#251b14] border border-tan/10 dark:border-sand_dollar/5 shadow-xl rounded-3xl p-8 lg:p-12 mb-8">
      <h3 className="text-2xl font-bold mb-8 relative pb-4">
        Leave a Reply
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-brown rounded-full"></span>
      </h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider opacity-60 ml-1">Comment</label>
          <textarea 
            value={formData.comment} 
            onChange={onInputChange} 
            className="w-full px-5 py-4 bg-tan/5 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brown/50 transition-all text-carafe dark:text-sand_dollar" 
            name="comment" 
            placeholder="What are your thoughts?" 
            rows="5"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider opacity-60 ml-1">Name</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={onInputChange} 
              className="w-full px-5 py-4 bg-tan/5 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brown/50 transition-all text-carafe dark:text-sand_dollar" 
              placeholder="John Doe" 
              name="name" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider opacity-60 ml-1">Email</label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={onInputChange} 
              className="w-full px-5 py-4 bg-tan/5 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brown/50 transition-all text-carafe dark:text-sand_dollar" 
              placeholder="john@example.com" 
              name="email" 
            />
          </div>
        </div>

        <div className="flex items-center gap-2 px-1">
          <input 
            checked={formData.storeData} 
            onChange={onInputChange} 
            type="checkbox" 
            id="storeData" 
            name="storeData" 
            className="w-4 h-4 rounded border-tan/30 text-brown focus:ring-brown"
          />
          <label className="text-sm text-carafe/60 dark:text-sand_dollar/60 cursor-pointer select-none" htmlFor="storeData"> 
            Save my name and email for the next time I comment.
          </label>
        </div>

        {error && <p className="text-sm font-bold text-red-500 px-1">⚠️ All fields are mandatory</p>}

        <div className="pt-4">
          <button 
            type="button" 
            onClick={handlePostSubmission} 
            className="px-10 py-4 bg-carafe text-sand_dollar hover:bg-brown transition-all duration-300 rounded-2xl font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Post Comment
          </button>
          {showSuccessMessage && (
            <div className="mt-4 p-4 bg-green/10 border border-green/20 rounded-xl">
              <p className="text-green font-bold text-center">✅ Comment submitted for review!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
