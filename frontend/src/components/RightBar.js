import "./Rightbar.css";

function Rightbar() {
  const trends = [
    {
      text: "Real Performance Paradox",
    },
    {
      text: "The Email Scam That Nearly Worked On Me",
    },
    {
      text: "The forgotten benefits of “low tech” user interfaces",
    },
    {
      text: "Become a Web3 Developer with just simple JS...",
    },
  ];

  return (
    <>
      <div className="rightbarContent">
        <input type="search" />

        <div className="trends">
          What are we reading Today
          {trends.map((e, i) => {
            return (
              <div key={i} className="trend">
                <div className="trendText">{e.text}</div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default Rightbar;
