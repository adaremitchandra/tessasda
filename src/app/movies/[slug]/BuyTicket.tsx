"use client";

import { useState } from "react";
import AudienceModal from "@/components/Order/AudienceModal";
import { Button } from "@/components/ui/button";

const BuyTicket = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Buy a Ticket
      </Button>
      <AudienceModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default BuyTicket;
