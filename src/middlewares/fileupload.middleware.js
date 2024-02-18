// 1. Import Multer.
import multer from 'multer';

// 2. Configure Storage with filename and location.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    // different for window users
    cb(null, new Date().toISOString().replace(/:/g, '_') + file.originalname);
  },
});

export const upload = multer({ storage: storage });
