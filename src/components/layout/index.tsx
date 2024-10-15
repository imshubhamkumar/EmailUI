import 'react';
import './style.css';
import EmailList from '../emailList';
import Email from '../email';

const Layout = () => {
  return (
    <>
      <div className="layout-body-container flex flex-row divide-x p-2">
        <div className="fix-sidebar h-full w-2/12 bg-base-100">
          <ul className='list p-2 gap-2'>
            <li className='list-item active p-3 cursor-pointer'>Inbox <div className="badge badge-primary">299+</div></li>
            <li className='list-item p-3 cursor-pointer'>Starred</li>
            <li className='list-item p-3 cursor-pointer'>Important</li>
            <li className='list-item p-3 cursor-pointer'>Draft</li>
            <li className='list-item p-3 cursor-pointer'>Sent Mail</li>
            <li className='list-item p-3 cursor-pointer'>Outbox</li>
            <li className='list-item p-3 cursor-pointer'>Archive</li>
            <li className='list-item p-3 cursor-pointer'>Trash</li>

          </ul>
        </div>
        <div className="mail-list-container h-full w-3/12"><EmailList /></div>
        <div className="mail-view-container h-full w-7/12 p-3"><Email /></div>
      </div>
    </>
  );
}

export default Layout;