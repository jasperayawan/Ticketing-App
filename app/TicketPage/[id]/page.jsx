"use client";

import TicketForm from "@/app/components/TicketForm";
import React, { useEffect, useState } from "react";
import axios from "axios";

async function getTicketById(id) {
  try {
    const res = await axios.get(`/api/Tickets/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default function TicketPage({ params }) {
  const EDITMODE = params.id === "new" ? false : true;
  const [updateTicketData, setUpdateTicketData] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (EDITMODE && !isDataFetched) {
        try {
          const data = await getTicketById(params.id);
          setUpdateTicketData(data.foundTicket);
        } catch (error) {
          console.error("Error fetching ticket:", error);
        } finally {
          setIsDataFetched(true);
        }
      } else if (!EDITMODE && !isDataFetched) {
        setUpdateTicketData({ _id: "new" });
        setIsDataFetched(true);
      }
    };

    fetchData();
  }, [EDITMODE, params.id, isDataFetched]);

  if (Object.keys(updateTicketData).length === 0 && updateTicketData.constructor === Object) {
    // Data is not available, you can render a placeholder or null
    return null;
  }

  return <TicketForm data={updateTicketData} />;
}
