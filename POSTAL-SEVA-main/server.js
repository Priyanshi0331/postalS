const express = require('express');
const mysql = require('mysql2'); // use mysql2
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shankar#745',  // change to your real password
  database: 'feedback_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Route for saving feedback
// Form 1 route
app.post('/submit-banking', (req, res) => {
  const { 'service-quality': service_quality, suggestions } = req.body;
 // change field names to match your form inputs
  const sql = 'INSERT INTO banking_feedback (service_quality, suggestions) VALUES (?, ?)';
  db.query(sql, [service_quality, suggestions], (err) => {
    if (err) return res.status(500).send('Error saving banking feedback');
    res.send('Banking feedback submitted!');
  });
});

app.post('/submit-mailnparcel', (req, res) => {
  const {
    'service-quality': service_quality,
    'operational-efficiency': operational_efficiency,
    'employee-interaction': employee_interaction,
    suggestions
  } = req.body;

  const sql = `
    INSERT INTO mailnparcel_feedback 
    (service_quality, operational_efficiency, employee_interaction, suggestions) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [service_quality, operational_efficiency, employee_interaction, suggestions], (err) => {
    if (err) {
      console.error('❌ Error saving Form 2:', err); // LOG error
      return res.status(500).send('Error saving Form 2');
    }
    res.send('✅ Feedback submitted successfully!');
  });
});



// Form 3 route
app.post('/submit-operations', (req, res) => {
  const {
    'service-quality': service_quality,
    'operational-efficiency': operational_efficiency,
    'employee-interaction': employee_interaction,
    suggestions
  } = req.body;

  const sql = `
    INSERT INTO operations_feedback 
    (service_quality, operational_efficiency, employee_interaction, suggestions) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [service_quality, operational_efficiency, employee_interaction, suggestions], (err) => {
    if (err) {
      console.error('❌ Error saving Form 2:', err); // LOG error
      return res.status(500).send('Error saving Form 2');
    }
    res.send('✅ Feedback submitted successfully!');
  });
});

app.post('/submit-personnel', (req, res) => {
  const {
    'service-quality': service_quality,
    'operational-efficiency': operational_efficiency,
    'employee-interaction': employee_interaction,
    suggestions
  } = req.body;

  const sql = `
    INSERT INTO personnel_feedback 
    (service_quality, operational_efficiency, employee_interaction, suggestions) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [service_quality, operational_efficiency, employee_interaction, suggestions], (err) => {
    if (err) {
      console.error('❌ Error saving Form 2:', err); // LOG error
      return res.status(500).send('Error saving Form 2');
    }
    res.send('✅ Feedback submitted successfully!');
  });
});

app.post('/submit-pli', (req, res) => {
  const {
    'service-quality': service_quality,
    'operational-efficiency': operational_efficiency,
    'employee-interaction': employee_interaction,
    suggestions
  } = req.body;

  const sql = `
    INSERT INTO pli_feedback 
    (service_quality, operational_efficiency, employee_interaction, suggestions) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [service_quality, operational_efficiency, employee_interaction, suggestions], (err) => {
    if (err) {
      console.error('❌ Error saving Form 2:', err); // LOG error
      return res.status(500).send('Error saving Form 2');
    }
    res.send('✅ Feedback submitted successfully!');
  });
});

app.post('/submit-tech', (req, res) => {
  const {
    'service-quality': service_quality,
    'operational-efficiency': operational_efficiency,
    'employee-interaction': employee_interaction,
    suggestions
  } = req.body;

  const sql = `
    INSERT INTO tech_feedback 
    (service_quality, operational_efficiency, employee_interaction, suggestions) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [service_quality, operational_efficiency, employee_interaction, suggestions], (err) => {
    if (err) {
      console.error('❌ Error saving Form 2:', err); // LOG error
      return res.status(500).send('Error saving Form 2');
    }
    res.send('✅ Feedback submitted successfully!');
  });
});

app.post('/submit-complaint', (req, res) => {
  const { category, type, description } = req.body;
  const sql = 'INSERT INTO complaints (category, type, description) VALUES (?, ?, ?)';

  db.query(sql, [category, type, description], (err) => {
    if (err) {
      console.error('Error saving complaint:', err);
      return res.status(500).send('Error saving complaint');
    }
    res.send('Complaint submitted successfully!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
