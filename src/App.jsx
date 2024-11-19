import { useState } from "react";
import calcu from "./assets/images/icon-calculator.svg";
import empty from "./assets/images/illustration-empty.svg";
function App() {
  const [monEmi, setEonEmi] = useState(0);
  const [mortAmt, setMortAmt] = useState("");
  const [mortTerm, setMortTerm] = useState("");
  const [intRate, setIntRate] = useState("");
  const [mortType, setMortType] = useState("");
  const [showRes, setShowRes] = useState(false);
  const handleMortSubmit = (e) => {
    e.preventDefault();
    if (mortAmt <= 0 || mortTerm <= 0) {
      alert("Please Enter Mortgage Amount or Mortage term correctly !!!");
    } else {
      setShowRes(true);
      const monthRate = intRate / 100 / 12;
      const time = Math.pow(1 + monthRate, mortTerm * 12);
      const emi = (mortAmt * monthRate * time) / (time - 1);
      setEonEmi(emi.toFixed(2));
    }
  };
  const clearAllData = () => {
    setShowRes(false);
    setMortAmt("");
    setMortTerm("");
    setIntRate("");
    setMortType("");
  };

  return (
    <>
      <main className="w-full box-border md:h-lvh py-5 flex justify-center place-items-center bg-slate-300 font-jakarta">
        <div
          id="mortCalCont"
          className="rounded-2xl bg-white w-[350px] md:w-[750px] flex flex-col md:flex-row text-black"
        >
          <div id="leftPanel" className="w-full md:w-1/2 p-7">
            <form onSubmit={handleMortSubmit}>
              <div id="heading1" className="flex justify-between mb-5">
                <h1 className="text-xl font-bold text-slate-90">
                  Mortgage Calculator
                </h1>
                <button className="underline text-xs" onClick={clearAllData}>
                  Clear All
                </button>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="amount"
                  className="text-sm text-slate-50 font-bold"
                >
                  Mortgage Amount
                </label>
                <div className="flex border-2 border-slate-50 rounded-md mb-4 focus-within:border-primaryLime transition-all">
                  <span className="rounded-l-md px-4 py-2 bg-slate-10 text-slate-30 font-bold transition-colors focus-within:bg-primaryLime">
                    £
                  </span>
                  <input
                    required
                    type="number"
                    step="any"
                    id="amount"
                    value={mortAmt}
                    onChange={(e) => setMortAmt(e.target.value)}
                    className="flex-1 bg-white px-3 py-2 rounded-r-md text-slate-90 focus:outline-none focus:ring-2 focus:ring-primaryLime"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full justify-between mb-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="years"
                    className="text-sm text-slate-50 font-bold"
                  >
                    Mortgage Term
                  </label>
                  <div className="flex box-border mt-1 border-2 border-slate-50">
                    <input
                      required
                      type="number"
                      step="any"
                      id="years"
                      value={mortTerm}
                      onChange={(e) => setMortTerm(e.target.value)}
                      className="flex-1 md:w-3/5 px-2 bg-white border-none"
                    />
                    <span className="px-3 py-2 bg-slate-10 text-slate-70 font-bold">
                      years
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="intRate"
                    className="text-sm text-slate-50 font-bold"
                  >
                    Interest Rate
                  </label>
                  <div className="flex box-border mt-1 border-2 border-slate-50">
                    <input
                      required
                      type="number"
                      step="any"
                      id="intRate"
                      value={intRate}
                      onChange={(e) => setIntRate(e.target.value)}
                      className="flex-1 md:w-3/5 p-2 bg-white border-none focus:outline-none"
                    />
                    <span className="w-10 text-slate-70 bg-slate-10 font-bold flex items-center justify-center">
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-50 mb-2 font-bold">
                  Mortgage Type
                </p>

                {["Repayment", "Interest Only"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 border-2 rounded-md cursor-pointer border-slate-50 px-4 py-2 mb-2 w-full text-slate-70 font-bold text-lg hover:border-blue-500 transition-all"
                  >
                    <input
                      type="radio"
                      name="mortType"
                      className="scale-125 text-slate-70 font-bold text-lg"
                      value={type}
                      checked={mortType === type}
                      onChange={(e) => setMortType(e.target.value)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>

              <button
                className="bg-primaryLime rounded-full w-72 flex gap-3 items-center justify-center py-3"
                type="submit"
              >
                <img src={calcu} alt={calcu} height={"20px"} width={"20px"} />
                <span className="text-slate-90 font-extrabold">
                  Calculate Repayments
                </span>
              </button>
            </form>
          </div>
          {/* <!-- Empty results start --> */}
          {showRes ? (
            <div
              id="rightPanel2"
              className="rounded-b-2xl md:rounded-r-2xl w-full md:w-1/2 bg-slate-90 flex flex-col md:rounded-bl-[60px] p-7"
            >
              <h2 className="text-2xl text-white mb-3">Your results</h2>
              <p className="text-sm text-justify text-slate-50 mb-7">
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </p>
              <div className="p-5 rounded-md border-slate-900 bg-slate-900 border-4 border-t-primary-lime">
                <h2 className="text-sm text-slate-50 mb-2">
                  Your monthly repayments
                </h2>
                <h1 className="text-5xl text-primaryLime mb-5">£{monEmi}</h1>

                <hr className="mb-5" />
                <h2 className="text-sm text-slate-50 mb-2">
                  Total you'll repay over the term
                </h2>
                <h2 className="text-white text-xl">
                  £{(monEmi * (mortTerm * 12)).toFixed(2)}
                </h2>
              </div>
            </div>
          ) : (
            <div
              id="rightPanel"
              className="md:rounded-r-2xl w-full md:w-1/2 bg-slate-90 flex flex-col justify-center place-items-center md:rounded-bl-[60px] py-7 rounded-b-2xl"
            >
              <img src={empty} alt={empty} />
              <h2 className="text-white mb-2">Results shown here</h2>
              <p className="px-5 text-xs text-center text-slate-50">
                Complete the form and click “calculate repayments” to see what
                your monthly repayments would be.
              </p>
            </div>
          )}
        </div>
      </main>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
