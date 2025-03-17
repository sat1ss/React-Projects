export function Tabs(props) {
  const { todos, setSelectedTab, selectedTab } = props;
  const tabs = ["Wszystkie", "Otwarte", "Skończone"];

  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "Wszystkie"
            ? todos.length
            : tab === "Otwarte"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => setSelectedTab(tab)}
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : "")
            }
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
