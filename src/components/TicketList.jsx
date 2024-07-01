import React from 'react'
import TicketItem from "./TicketItem";

const TicketList = ({tickets, dispatch}) => {
    return (
        <div className="ticket-list">
            {tickets.map(ticket => <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch} />)}
        </div>
    )
}
export default TicketList
