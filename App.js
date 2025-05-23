import React, { useState } from 'react';

import './App.css';



function App() {

  const [resume, setResume] = useState('');

  const [jobDesc, setJobDesc] = useState('');

  const [feedback, setFeedback] = useState('');



  const handleSubmit = async (e) => {

    e.preventDefault();



    const response = await fetch('http://localhost:5000/api/screener', {

      method: 'POST',

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({ resumeText: resume, jobDescription: jobDesc })

    });



    const data = await response.json();

    setFeedback(data.feedback);

  };



  return (

    <div className="App">

      <h1>AI Job Application Screener</h1>

      <form onSubmit={handleSubmit}>

        <textarea

          placeholder="Paste your resume here..."

          value={resume}

          onChange={(e) => setResume(e.target.value)}

          rows="10"

        />

        <textarea

          placeholder="Paste the job description here..."

          value={jobDesc}

          onChange={(e) => setJobDesc(e.target.value)}

          rows="10"

        />

        <button type="submit">Submit</button>

      </form>

      {feedback && (

        <div className="feedback">

          <h3>AI Feedback:</h3>

          <p>{feedback}</p>

        </div>

      )}

    </div>

  );

}



export default App;





