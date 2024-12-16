import React from "react";
import ProductContext from "./ProductContext";

export function ProductContextProvider({ children }) {
  const products = [
    {
      id: 1,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/28704a53e068f54598d5569d4567d859/d90873c869a4bcbc3d976acaaf833109ed5b5c2fda3e162b4fdd56cb7d923cb3.jpg.webp",
      name: '15.6" Ноутбук MAIBENBEN M545 серебристый',
      price: 39999,
    },
    {
      id: 2,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/500/500/2fc5361c339ef2a1a525aa3931d10f5d/6e5030fd19a93d78853c3605a50cbd01633393a6e258eb75922042f318eef702.jpg.webp",
      name: "Наушники TWS HUAWEI Freebuds 5i черный",
      price: 3999,
    },
    {
      id: 3,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/15feac35e8c27b23deddd735d444c602/d232b7b37c70cb4c8888beacb31379c3f60648a2e3aeac5d069cc6f4a867d92e.jpg.webp",
      name: '6.6" Смартфон Samsung Galaxy A55 256 ГБ фиолетовый',
      price: 41999,
    },
    {
      id: 4,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/a067547dc968d0407a102e6f4e50aaed/f4d8cb2b573b49dcd1e9550efc1d0198e470d8a9b934eadfef78506d9b6324fe.jpg.webp",
      name: "Мышь беспроводная Logitech M240 SILENT [910-007078] черный",
      price: 2250,
    },
    {
      id: 5,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/500/500/0c61dce025c9a9eb3f699bbced7ed747/8ae0afc56f0414b8b68aabe927560986c6ff046c7ccbb27f28fcb6264f37ce4b.jpg.webp",
      name: '31.5" Монитор DEXP DQ32N1 черный',
      price: 19999,
    },
  ];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
