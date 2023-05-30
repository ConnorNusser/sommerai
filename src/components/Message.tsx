import { DocumentData } from "firebase/firestore"
import React from "react";

type Props = {
  message: DocumentData
}

function Message({ message }: Props) {

  const isChatGPT = message.user.name === "ChatGPT"

  function renderString(myString: string): JSX.Element[] {
    const lines = myString.split("\n");

    return lines.flatMap((line, index) => {
      const elements = [<React.Fragment key={index}>{line}</React.Fragment>];

      if (index < lines.length - 1) {
        elements.push(<br key={`br-${index}`} />);
      }

      return elements;
    });
  }

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#3e3e46]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8 rounded" />
        <p className="pt-1 text-sm">{renderString(message.text)}</p>
      </div>
    </div>
  )
}

export default Message