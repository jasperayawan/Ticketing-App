import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <DeleteBlock />
        <div className="ml-auto">
          <PriorityDisplay />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        this is the ticket description! Please do this ticket
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">12.27.23</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
        <StatusDisplay />
        </div>
      </div>
    </div>
  );
}
