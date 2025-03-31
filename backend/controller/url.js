import { nanoid } from 'nanoid';
import Url from '../models/url.js';


const handleGenerateNewUrl = async (req, res) => {
    const body = req.body;
    if (!body || !body.originalUrl) {
        return res.status(400).json({ message: 'No valid body provided' });
    }
    
    const shortId = nanoid(8);
    try {
        await Url.create({
            originalUrl: req.body.originalUrl,
            shortId: shortId, 
            createdAt: new Date(),
        });
        return res.json({ id: shortId });
    } catch (err) {
        return res.status(500).json({ message: 'Database error', error: err });
    }
};

const getUrl = async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const url = await Url.findOne({ shortId: shortId });
        if (!url) return res.status(404).json({ message: 'Url not found' });
        
        return res.redirect(url.originalUrl);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};




export default {handleGenerateNewUrl, getUrl};