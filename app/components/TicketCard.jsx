import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard({ category, createdAt, description, priority, progress, status, title, updatedAt }) {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <DeleteBlock />
        <div className="ml-auto">
          <PriorityDisplay priority={priority}/>
        </div>
      </div>
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{createdAt}</p>
          <ProgressDisplay progress={progress}/>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={status}/>
        </div>
      </div>
    </div>
  );
}
