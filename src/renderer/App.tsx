import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <TextField helperText="请选择视频" id="video-file-path" label="视频" />
      <Button variant="text">打开文件</Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
