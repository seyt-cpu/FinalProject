const express = require('express');

const router = express.Router();



// Mocked AI response

router.post('/', async (req, res) => {

    const { resumeText, jobDescription } = req.body;



    if (!resumeText || !jobDescription) {

        return res.status(400).json({ message: 'Missing input fields' });

    }



    // Simulate AI feedback

    const feedback = `AI Feedback:

- Resume length: ${resumeText.length} characters

- Matches job description keywords

- Suggest adding more relevant experience`;



    res.json({ feedback });

});



module.exports = router;