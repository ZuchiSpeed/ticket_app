import React from "react";
import TicketCard from "./(components)/TicketCard";

//Function to fetch tickets from the API
const getTickets = async () => {
  try {
    //Fetch data from the API endpoint
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    //Parse the response as JSON
    return res.json();
  } catch (error) {
    console.log("Failed to get Ticket", error);
  }
};

const Dashboard = async () => {
  //Fetch ticket data using the getTickets function
  const { tickets } = await getTickets();

  //Extract unique categories from the fetched tickets
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>

              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {/* Filter tickets by category */}
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
        <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
