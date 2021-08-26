import toast, { Toaster } from 'react-hot-toast';


export const Notify = ({buttonName, }) => {
  const notify = () => toast('Here is your toast.');
  return (
    <div>
      <Toaster />
    </div>
  );
};