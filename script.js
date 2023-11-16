function openTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('[id^="tab"]');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.classList.add('hidden');
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.remove('hidden');
    const selectedButton = document.querySelector(`.tab-btn[onclick="openTab('${tabId}')"]`);
    selectedButton.classList.add('active');
}
