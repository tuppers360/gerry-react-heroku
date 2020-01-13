import React from "react";

const ButtonGroupDonationAmount = () => {
  return (
    <div class="btn-group mr-2" role="group" aria-label="First group">
      <button
        type="button"
        class="btn btn-secondary mr-2"
        value="10"
        onClick={e => setDonation(e.target.value)}
      >
        Make a <span>£10</span> Donation
      </button>
      <button
        type="button"
        class="btn btn-secondary mr-2"
        value="20"
        onClick={e => setDonation(e.target.value)}
      >
        Make a <span>£20</span> Donation
      </button>
      <button
        type="button"
        class="btn btn-secondary mr-2"
        value="50"
        onClick={e => setDonation(e.target.value)}
      >
        Make a <span>£50</span> Donation
      </button>
      <button type="button" class="btn btn-secondary">
        Make a <span>£</span> Donation
      </button>
    </div>
  );
};

export default ButtonGroupDonationAmount;
