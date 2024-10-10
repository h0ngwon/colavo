# 콜라보그라운드 과제

## 기술 스택
* Typescript
* React
* Zustand
* React-icons
* React-router-dom
* Yarn
* Vite

## 실행 방법
yarn dev로 실행

## 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┗ 📜api.ts
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜FooterContent.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜HeaderContent.tsx
 ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜CartList.tsx
 ┃ ┣ 📜DiscountList.tsx
 ┃ ┣ 📜ItemList.tsx
 ┃ ┣ 📜Modal.tsx
 ┃ ┗ 📜Total.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetchDiscount.ts
 ┃ ┗ 📜useFetchItems.ts
 ┣ 📂pages
 ┃ ┣ 📜Discount.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜Item.tsx
 ┣ 📂shared
 ┃ ┗ 📜Router.tsx
 ┣ 📂store
 ┃ ┣ 📜cartStore.ts
 ┃ ┗ 📜modalStore.ts
 ┣ 📂styles
 ┃ ┣ 📜App.css
 ┃ ┣ 📜Button.css
 ┃ ┣ 📜Cart.css
 ┃ ┣ 📜Discount.css
 ┃ ┣ 📜Footer.css
 ┃ ┣ 📜Header.css
 ┃ ┣ 📜Home.css
 ┃ ┣ 📜Item.css
 ┃ ┣ 📜Layout.css
 ┃ ┣ 📜Modal.css
 ┃ ┣ 📜global.css
 ┃ ┗ 📜index.css
 ┣ 📂types
 ┃ ┗ 📜types.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
 ```