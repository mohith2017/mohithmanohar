import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const BlinkedBox = styled('div')({
  backgroundColor: 'green',
  width: 30,
  height: 30,
  borderRadius: '50%',
  animation: `${blink} 5s linear infinite`,
});

export {BlinkedBox};