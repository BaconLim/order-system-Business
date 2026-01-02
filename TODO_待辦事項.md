# 待辦事項清單 (ToDo List)

為了讓這套系統能真正「落地營業」，以下是我們剩下的關鍵任務 (約最後 15%)：

## 1. 後端串接與營業狀態檢查 (重要)
- [ ] **現況**：在 `index.html` 的程式碼中，`checkStoreStatus()` (檢查是否營業) 目前是被 **註解掉 (commented out)** 的狀態。
- [ ] **影響**：目前系統預設永遠是「營業中」，無法自動抓取 Google Sheet 的公休設定。
- [ ] **行動**：需要確認 Google Apps Script (GAS) 後端是否已部署完成，並將該行程式碼啟用。

## 2. 商家接單通知 (已改用 Pushover)
- [x] **現況**：訂單送出後會打 API 到 Google Script。
- [x] **疑問**：老闆怎麼知道有新訂單？
- [x] **行動**：已將 User Key `uxeiarrm...` 寫入程式。
- [x] **待辦**：**已填入您的 Pushover API Token (`aj3wzur...`)**。

## 3. 部署上線 (Hosting)
- [ ] **現況**：目前我們是在本機檔案 (`file:///`) 執行。
- [ ] **行動**：客戶無法連到您的電腦。需要將 `index.html` 和 `store_data.js` 上傳到 **GitHub Pages**、**Vercel** 或您的主機空間，才能產生一個網址 (例如 `https://bacon.github.io/order-system/?store=wangfu`) 讓客人點選。
