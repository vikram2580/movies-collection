import express from 'express';
const router = express.Router();

import { ProcessLogin, ProcessLogout, ProcessRegistraion } from '../Controllers/auth';

//List of Authentication Routes (endpoints)

// Register User //
router.post('/register', (req, res, next)=> { ProcessRegistraion(req, res, next);});

// Login User//

router.post('/login', (req, res, next)=> { ProcessLogin(req, res, next);});

//Logout User //
router.get('/logout', (req, res, next)=> { ProcessLogout(req, res, next);});



export default router;
