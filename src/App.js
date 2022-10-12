import React, { useState } from "react";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bank, setBank] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [entry, setEntry] = useState("");
  const [endmessage, setEndmessage] = useState("");
  const [endhere, setEndhere] = useState(false);
  const [returnto, setReturnTo] = useState("");
  const [returnin, setReturnIn] = useState(1);
  const menuItems = [
    {
      title: "Welcome to Ajo",
      menu: ["New User", "Existing User", "Recover Account"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(0.11);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(1.12);
            break;
          case 3:
            setEntry("");
            setCurrentIndex(50.11);
            break;

          default:
            break;
        }
      },
    },
    {
      title: "Welcome to Ajo",
      menu: ["Save/Credit", "Wallet", "Transfer"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(2);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(4);
            break;
          case 3:
            setEntry("");
            setCurrentIndex(7);
            break;
          default:
            break;
        }
      },
    },
    {
      title: "Save/Credit",
      menu: ["Your airtime account", "Your other bank account", "Back to Main"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(2.15);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(2.18);
            break;
          case 3:
            setEntry("");
            setCurrentIndex(1);
            break;
          default:
            setEntry("");
            break;
        }
      },
    },
    {
      title: `Confirm if details is correct\n2348127463728\n#${Number(
        amount
      ).toLocaleString()}`,
      menu: ["Proceed", "Return to Save/Credit"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setReturnTo("Save/Credit");
            setReturnIn(2);
            setCurrentIndex(17);
            break;
          case 2:
            setEntry("");
            setReturnTo("Save/Credit");
            setReturnIn(2);
            setCurrentIndex(2);
            break;
          default:
            break;
        }
      },
    },
    {
      title: "Wallet",
      menu: ["Check balance", "Check history", "Back to main"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(5);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(6);
            break;
          case 3:
            setEntry("");
            setCurrentIndex(1);
            break;
          default:
            break;
        }
      },
    },
    {
      title: "Your account balance is #100,000",
      menu: ["Main", "Return to Wallet"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(1);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(4);
            break;
          default:
            break;
        }
      },
    },
    {
      title: "Check message sent via Inbox",
      menu: ["Menu", "Return to Wallet"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(1);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(4);
            break;
          default:
            break;
        }
      },
    },
    {
      title: "Transfer",
      menu: ["Bank account", "To your airtime account", "Back to main"],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setReturnIn(7);
            setReturnTo("Transfer");
            setCurrentIndex(7.14);
            break;
          case 2:
            setEntry("");
            setReturnIn(7);
            setReturnTo("Transfer");
            setCurrentIndex(7.15);
            break;
          case 3:
            setEntry("");
            setCurrentIndex(1);
            break;
          default:
            break;
        }
      },
    },
    {},
    {},
    {},
    {
      title: "Enter your name",
      btnClick: () => {
        entry.trim() !== ""
          ? setName(entry) ||
            setEntry("") ||
            currentIndex.toString().split(".")[0] === "0"
            ? setCurrentIndex(0.12)
            : currentIndex.toString().split(".")[0] === "50"
            ? setCurrentIndex(50.12)
            : setCurrentIndex(1)
          : alert("Enter your name");
      },
    },
    {
      title: "Enter your phone number",
      btnClick: () => {
        entry.trim() !== ""
          ? setPhone(entry) ||
            setEntry("") ||
            currentIndex.toString().split(".")[0] === "0"
            ? setCurrentIndex(0.13)
            : currentIndex.toString().split(".")[0] === "1"
            ? setCurrentIndex(1.13)
            : currentIndex.toString().split(".")[0] === "50"
            ? setEndhere(true) || setEndmessage("Check message sent via inbox")
            : setCurrentIndex(1)
          : alert("Enter your phone number");
      },
    },
    {
      title: "Enter your 5 digit pin password",
      btnClick: () => {
        entry.trim() !== ""
          ? setPin(entry) ||
            setEntry("") ||
            currentIndex.toString().split(".")[0] === "0"
            ? setCurrentIndex(0.14)
            : currentIndex.toString().split(".")[0] === "1"
            ? setCurrentIndex(1)
            : setCurrentIndex(1)
          : alert("Enter 5 digit pin password");
      },
    },
    {
      title: "Re-enter your 5 digit pin password",
      btnClick: () => {
        entry.trim() !== ""
          ? pin === entry
            ? setEntry("") || currentIndex.toString().split(".")[0] === "0"
              ? setCurrentIndex(0)
              : setCurrentIndex(1)
            : alert("Pin does not match")
          : alert("Enter your phone number");
      },
    },
    {
      title: "Enter amount",
      btnClick: () => {
        entry.trim() !== ""
          ? setAmount(entry) ||
            setEntry("") ||
            setCurrentIndex(
              Number(`${currentIndex.toString().split(".")[0]}.16`)
            )
          : alert("Enter an amount");
      },
    },
    {
      title: "Enter pin/password",
      btnClick: () => {
        entry.trim() !== ""
          ? setAmount(entry) ||
            setEntry("") ||
            setCurrentIndex(Number(currentIndex.toString().split(".")[0]) + 1)
          : alert("Enter pin/password");
      },
    },
    {
      title: "Transaction successful",
      menu: ["Main", `Return to ${returnto}`],
      btnClick: () => {
        switch (Number(entry)) {
          case 1:
            setEntry("");
            setCurrentIndex(1);
            break;
          case 2:
            setEntry("");
            setCurrentIndex(returnin);
            break;
          default:
            setEntry("");
            setCurrentIndex("1");
        }
      },
    },
    {
      title: "Enter account number",
      btnClick: () => {
        entry.trim() !== ""
          ? setAmount(entry) ||
            setEntry("") ||
            setCurrentIndex(
              Number(`${currentIndex.toString().split(".")[0]}.19`)
            )
          : alert("Enter account number");
      },
    },
    {
      title: "Select Bank",
      menu: [
        "Zenith Bank",
        "Access Bank",
        "FCMB",
        "GTBank",
        "Fidelity Bank",
        "First Bank",
        "More Banks",
      ],
      btnClick: () => {
        entry.trim() !== "" && Number(entry) < 7
          ? setEntry("") ||
            setBank(menuItems[19].menu[entry - 1]) ||
            setCurrentIndex(
              Number(`${currentIndex.toString().split(".")[0]}.16`)
            )
          : alert("Select A Bank");
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      <>
        <h4
          style={{
            color: "#000",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {endhere
            ? endmessage
            : menuItems[
                currentIndex % 1
                  ? currentIndex.toString().split(".")[1]
                  : currentIndex
              ]?.title}
        </h4>
        <ol>
          {menuItems[
            currentIndex % 1
              ? currentIndex.toString().split(".")[1]
              : currentIndex
          ]?.menu?.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ol>
        {endhere || (
          <input
            type={"text"}
            value={entry}
            onInput={(e) => setEntry(e.target.value)}
            style={{
              width: "150px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "0 10px",
              outline: "none",
            }}
          />
        )}
        <button
          onClick={
            endhere
              ? () => setCurrentIndex(0) || setEndhere(false)
              : menuItems[
                  currentIndex % 1
                    ? currentIndex.toString().split(".")[1]
                    : currentIndex
                ]?.btnClick
          }
          style={{
            width: "80px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "0 10px",
            outline: "none",
            marginTop: "10px",
          }}
        >
          {endhere ? "Dismiss" : "Next"}
        </button>
      </>
    </div>
  );
};

export default App;
