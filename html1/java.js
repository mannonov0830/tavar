function showTab(tabId, btnElement) {
    // 1. Hamma tablarni yashirish
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 2. Hamma tugmalardan 'active' klassini olib tashlash
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Tanlangan tabni ko'rsatish
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // 4. Bosilgan tugmani aktiv qilish
    btnElement.classList.add('active');
    
}
function showTab(tabId, element) {
    // 1. Hamma tablarni yashirish
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 2. Hamma tugmalardan 'active' klassini olib tashlash
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Tanlangan tabni ko'rsatish
    document.getElementById(tabId).classList.add('active');

    // 4. Bosilgan tugmani aktiv qilish
    element.classList.add('active');
}