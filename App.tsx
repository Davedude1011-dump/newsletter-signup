import { useState } from "react";
import ListIconSvg from "./assets/icon-list.svg";
import SuccessIconSvg from "./assets/icon-success.svg";
import BackgroundDesktop from "./assets/illustration-sign-up-desktop.svg";
import BackgroundMobile from "./assets/illustration-sign-up-mobile.svg";

function TickGroup({ text }: { text: string }) {
  return (
    <div className="d-flex flex-row p-2 ps-0">
      <img src={ListIconSvg} alt="" />
      <p className="m-0 ms-3">{text}</p>
    </div>
  );
}
function FormGroup({
  email,
  setEmail,
  submitAttempted,
  setSubmitAttempted,
  setSuccessSubmit,
}: {
  email: string;
  setEmail: (email: string) => void;
  submitAttempted: boolean;
  setSubmitAttempted: (submitAttempted: boolean) => void;
  setSuccessSubmit: (successSubmit: boolean) => void;
}) {
  return (
    <>
      <h1 className="display-1 font-weight-bold">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <TickGroup text="Product discovery and building what matters" />
      <TickGroup text="Measuring to ensure updates are a success" />
      <TickGroup text="And much more" />
      <div className="form-group mb-2 mt-3">
        <div className="w-100 d-flex flex-row justify-content-between">
          <label htmlFor="email" className="form-label">
            Email adress
          </label>
          {!email.includes("@") && submitAttempted && (
            <label htmlFor="email" className="text-danger">
              Valid email required
            </label>
          )}
        </div>
        <input
          type="email"
          className={`form-control p-3 ${
            !email.includes("@") &&
            submitAttempted &&
            "border border-danger text-danger"
          }`}
          id="email"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="emailHelp"
        />
      </div>
      <button
        className="btn btn-dark w-100 py-3 mt-3 btn-subscribe"
        onClick={() => {
          setSubmitAttempted(true);
          if (email.includes("@")) {
            setSuccessSubmit(true);
          }
        }}
      >
        Subscribe to monthly newsletter
      </button>
    </>
  );
}

function App() {
  const isMobile = window.matchMedia("(orientation: portrait)").matches;

  const [email, setEmail] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  if (successSubmit) {
    if (isMobile) {
      return (
        <div className="container p-0 h-100">
          <div
            className="container p-5 h-100"
            style={{
              backgroundColor: "white",
              width: "fit-content",
            }}
          >
            <img src={SuccessIconSvg} className="mt-5 mb-3" alt="" />
            <h1 className="font-weight-bold mt-3">Thanks for subscribing!</h1>
            <p className="mb-5">
              A confirmation email has been sent to {email}. Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              className="btn btn-dark w-100 py-3 mt-5 btn-subscribe"
              onClick={() => {
                setSubmitAttempted(true);
                if (email.includes("@")) {
                  setSuccessSubmit(true);
                }
              }}
            >
              Dismiss message
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
          <div
            className="container p-5 rounded"
            style={{
              backgroundColor: "white",
              width: "30%",
              minWidth: "300px",
            }}
          >
            <img src={SuccessIconSvg} className="mb-3" alt="" />
            <h1 className="font-weight-bold mt-3">Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to {email}. Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              className="btn btn-dark w-100 py-3 mt-3 btn-subscribe"
              onClick={() => {
                setSubmitAttempted(true);
                if (email.includes("@")) {
                  setSuccessSubmit(true);
                }
              }}
            >
              Dismiss message
            </button>
          </div>
        </div>
      );
    }
  } else {
    if (isMobile) {
      return (
        <div
          className="container p-0"
          style={{ backgroundColor: "white", height: "100vh" }}
        >
          <img
            src={BackgroundMobile}
            alt=""
            className="w-100 d-block"
            style={{ maxHeight: "40vh" }}
          />
          <div className="p-4">
            <FormGroup
              email={email}
              setEmail={setEmail}
              submitAttempted={submitAttempted}
              setSubmitAttempted={setSubmitAttempted}
              setSuccessSubmit={setSuccessSubmit}
            ></FormGroup>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container d-flex flex-column align-items-center justify-content-center w-100 h-100">
          <div
            className="container rounded d-flex flex-row p-4 align-items-center"
            style={{ backgroundColor: "white", width: "fit-content" }}
          >
            <div className="me-4">
              <FormGroup
                email={email}
                setEmail={setEmail}
                submitAttempted={submitAttempted}
                setSubmitAttempted={setSubmitAttempted}
                setSuccessSubmit={setSuccessSubmit}
              ></FormGroup>
            </div>
            <div className="ms-4" style={{ maxWidth: "50%" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={BackgroundDesktop}
                alt=""
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default App;
