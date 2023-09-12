import Button from "@/components/ui/button";

export default function OrderSummary() {
  return (
    <div className="flex flex-col">
      <h1>Order Summary</h1>
      {/* Card */}
      <div className="flex justify-between font-bold">
        <div>Total</div>
        <div>$200</div>
      </div>
      <Button className="text-xl text-center">Apply Pay</Button>
      <Button className="text-xl text-center">Google Pay</Button>
      <form action="">
        <label htmlFor="card-holder">Card holder</label>
        <input id="card-holder" type="text" placeholder="Your name" />
        <span>Card number</span>
        <input type="text" />
        <div className="flex">
          <div className="flex flex-col">
            <span>Valid until</span>
            <input type="text" placeholder="MM/YYYY" />
          </div>
          <div className="flex flex-col">
            <span>Security Code</span>
            <input type="text" placeholder="***" />
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <span>Accept the Terms and Conditions </span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Use as default payment method </span>
        </div>
        <Button className="text-xl">Pay 200 to Join Campaign</Button>
      </form>
    </div>
  );
}

//Global Container
//Petition Detail Div
//Div for Total
//Button Div
//Button Div
//Card Holder Span
//Input Name
//Card number span
//Input Card number
//DIV for Valid and Security Code

//Checkbox
//Checkbox
//Button
