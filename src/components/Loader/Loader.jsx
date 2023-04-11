import { Box } from 'components/Box/Box';
import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Box mx="auto" my={0} px={6} py={4} bg="container" textAlign="center">
      <h2>Searching for You</h2>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="black"
        barColor="orange"
      />
    </Box>
  );
};
export default Loader;