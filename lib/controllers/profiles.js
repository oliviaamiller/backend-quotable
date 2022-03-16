const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!
  const profile = await ProfileService.create(req.body.name);
  res.send(profile);
});
