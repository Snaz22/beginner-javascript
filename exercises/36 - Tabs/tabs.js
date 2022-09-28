const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const tabPanelArray = Array.from(tabPanels);

function handleTabClick(event) {
  // hide all panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  // mark clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find correct tab panel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabPanelArray.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
