const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

router.post('/voter', ({ body }, res) => {
    // Data validation
const errors = inputCheck(body, 'first_name', 'last_name', 'email');
if (errors) {
  res.status(400).json({ error: errors });
  return;
}

    const sql = `INSERT INTO voters (first_name, last_name, email) VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.email];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

module.exports = router;