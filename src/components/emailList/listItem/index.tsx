import './style.css'
const EmailListItem = () => {
  return (
    <>
      <div className="list-item-container p-4  cursor-pointer bg-base-100 shadow">
        <div className="flex flex-row">
          <div className="item-detail flex flex-col w-4/5">
            <span className="sender-name font-bold text-base">Sender Name</span>
            <span className="sender-name text-xs">Email subject details</span>
            <span className="font-semibold text-sm">The actual email text contains</span>
          </div>
          <div className="item-date">
            <span className='text-sm'>Nov 1</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailListItem;