import EmailListItem from "./listItem";

const EmailList = () => {
  return (
    <>
      <ul className="flex flex-col h-full overflow-auto gap-2 p-1">
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
        <li><EmailListItem /></li>
      </ul>
    </>
  );
}

export default EmailList;