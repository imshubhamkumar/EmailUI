import { faReply, faReplyAll, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Email = () => {
  return (
    <>
      <div className="email-container flex flex-col h-full w-full divide-y bg-base-100 shadow-lg">
        <div className="email-icon-container">
          <ul className='flex flex-row gap-4 p-6'>
            <li><FontAwesomeIcon icon={faTrash} /></li>
            <li><FontAwesomeIcon icon={faReply} /></li>
            <li><FontAwesomeIcon icon={faReplyAll} /></li>
            <li><FontAwesomeIcon icon={faShare} /></li>
          </ul>
        </div>
        <div className="email-header-container p-4 flex flex-col">
          <h1 className="text-lg font-bold">Meeting Tomorrow</h1>
          <span className="text-sm">From: Jhon Doe</span>
          <span className="text-sm">To: Me</span>
          <span className="text-sm">October 15, 2024, 10:00 AM</span>
        </div>
        <div className="email-message-body-container p-4">
          <p className='text-base'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
    </>
  );
}

export default Email;