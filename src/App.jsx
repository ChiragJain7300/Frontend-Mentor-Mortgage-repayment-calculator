import { useState } from "react";
import "./App.css";
import calcu from "./assets/images/icon-calculator.svg";
import empty from "./assets/images/illustration-empty.svg";
function App() {
  const [monEmi, setEonEmi] = useState(0);
  const [mortAmt, setMortAmt] = useState(0);
  const [mortTerm, setMortTerm] = useState(0);
  const [intRate, setIntRate] = useState(0);
  const [mortType, setMortType] = useState("repayment");
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
    setMortAmt(0);
    setMortTerm(0);
    setIntRate(0);
    setMortType("repayment");
  };
  return (
    <>
      <main className="w-full box-border md:h-lvh py-5 flex justify-center place-items-center bg-slate-300">
        <div
          id="mortCalCont"
          className="rounded-2xl bg-white w-[350px] md:w-[700px] flex flex-col md:flex-row text-black"
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

              <div className="w-full">
                <p htmlFor="amount" className="text-sm mb-1 text-slate-50">
                  Mortgage Amount
                </p>
                <div className="flex border-2 border-slate-50 rounded-md mb-4">
                  <span className="rounded-l-md px-3 py-2 bg-slate-10">£</span>
                  <input
                    required
                    type="number"
                    step="any"
                    id="amount"
                    value={mortAmt}
                    onChange={(e) => setMortAmt(e.target.value)}
                    className="flex-1 bg-white px-3 border-none rounded-r-md"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full justify-between mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="years" className="text-sm text-slate-50">
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
                    <p className="px-2 py-2 bg-slate-10 font-bold">years</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="intRate" className="text-sm text-slate-50">
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
                      className="flex-1 md:w-3/5 px-2 bg-white border-none"
                    />
                    <p className="px-2 py-2 md:p-2 bg-slate-10 font-bold">%</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-slate-50">Mortgage Type</label>
                <div className="border-2 border-slate-50 p-2 text-sm flex place-items-center mt-1 mb-2">
                  <input
                    type="radio"
                    name="mortType"
                    className="ms-2"
                    checked={mortType === "repayment"}
                    onChange={() =>
                      setMortType(
                        mortType === "repayment" ? "intOnly" : "repayment"
                      )
                    }
                  />
                  <label className="ms-2">Repayment</label>
                </div>
                <div className="border-2 border-slate-50 p-2 text-sm flex place-items-center">
                  <input
                    type="radio"
                    name="mortType"
                    className="ms-2"
                    checked={mortType === "intOnly"}
                    onChange={() =>
                      setMortType(
                        mortType === "intOnly" ? "repayment" : "intOnly"
                      )
                    }
                  />
                  <label className="ms-2">Interest Only</label>
                </div>
              </div>

              <button
                className="bg-primary-lime text-white rounded-full py-3 px-7 flex gap-2 place-items-center"
                type="submit"
              >
                <img src={calcu} alt={calcu} height={"20px"} width={"20px"} />
                <span className="text-slate-90 font-bold">
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
                <h1 className="text-5xl text-primary-lime mb-5">£{monEmi}</h1>

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
