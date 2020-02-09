const slides = [
    {
        name: "EKHOLM",
        price: 249,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1512926535410-XDP6126EX2CPS1UWHEJG/ke17ZwdGBToddI8pDm48kLI70CcEvqvBTByK66Nx49F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLLxGPZs9cXJqW7PQ94qJwyM2uArq5mLdLLdiM06i-09unVZ-9R3Ny66K3yegEQyZ/IMG_1746.JPG?format=1500w",
        smallImgUrl: "https://static1.squarespace.com/static/598cbf3c1e5b6c9f35e3931b/598cbfef893fc0c9986318f0/598d96a6e45a7c6e08c00fc1/1568455573789/upload.jpg",
        color: "Gold",
        size: "M",
        description: "Named after asteroid 1 2 4 9 6 (e k h o l m) is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxy’s & moons, until its path came into contact with Earth."
    },
    {
        name: "CELSO",
        price: 220,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1515699222149-VSQ58QJWJP7A7MPPNMKY/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_8947.JPG?format=500w",
        smallImgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1502842915028-OATP8ZTSQH2JXJMASQXP/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/edited_blackgoldtan+%281+of+1%29-52.jpg?format=500w",
        color: "Black",
        size: "L",
        description: "Named after asteroid 8 4 1 1 (c e l s o) is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxies & moons, until its path came into contact with our Earth."
    },
    {
        name: "HISAKO",
        price: 239,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1515699941358-ACJXU4ULTU0AFND0N35T/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_8915.JPG",
        smallImgUrl: "https://static1.squarespace.com/static/598cbf3c1e5b6c9f35e3931b/598cbfef893fc0c9986318f0/598d8e6ebf629aff8b6f3cf2/1568455638241/blackgoldface_darkbrownstrap_01_agfaista_400%2B_final+%281+of+1%29.jpg",
        color: "Gold",
        size: "L",
        description: "Named after asteroid 6 0 9 4 (h i s a k o) is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxies & moons, until its path came into contact with Earth."
    },
]

const discoverWatches = [
    {
        name: "METIS",
        price: 232,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1515700353854-6EH6HF7R8RW87AKDDKXD/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_8953.JPG?format=500w",
        smallImgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1502841785651-R8O0F06ZZGF4J3HAX8EO/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/edited_blackgoldtan+%281+of+1%29-44.jpg?format=500w",
        color: "Meteorite",
        size: "M",
        description: "Named after asteroid 1 7 4 (m e t i s)  is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxy’s & moons, until its path came into contact with our Earth."
    },
    {
        name: "KAHO",
        price: 232,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1515700129134-NMG25FACSGONTHYZN1YK/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_8035.JPG?format=500w",
        smallImgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1502822884174-FMVYYTYITQS4JC6J8LO9/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/edited_blackgoldtan+%281+of+1%29-6.jpg?format=500w",
        color: "Gold",
        size: "S",
        description: "Named after asteroid 4 2 8 4 (k a h o) is in the main asteroid belt and is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxies & moons, until its path came into contact with Earth."
    },
    {
        name: "SORM",
        price: 232,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1515700732569-838KA783G23EO8SDXA7P/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_8919.JPG?format=500w",
        smallImgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1502837222152-IHPAX2I76XKTBQ68ZBYJ/ke17ZwdGBToddI8pDm48kLdL40TmVryAZnFYQ_8SJtJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYcDHBnv7IPzW9n9li-LF8GWln2m9DyUuzLaFyo_kJ79pg/edited_blackgoldtan+%281+of+1%29-21.jpg?format=500w",
        color: "Black",
        size: "S",
        description: "Named after asteroid 3 9 9 3 (s o r m) has a diameter of 44 km & is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxies & moons, until its path came into contact with Earth."
    },
    {
        name: "BOYCE",
        price: 232,
        imgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1515702485527-6NFXEWDSAQ1NNCN8Z1MQ/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/321B7223.jpg?format=500w",
        smallImgUrl: "https://images.squarespace-cdn.com/content/v1/598cbf3c1e5b6c9f35e3931b/1502838365318-39SLOD7MMTGNE1O80V3I/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/edited_blackgoldtan+%281+of+1%29-30.jpg?format=500w",
        color: "Brown",
        size: "M",
        description: "Named after asteroid 2 6 1 1 (b o y c e) was first observed in 1970 and is currently travelling through time and space. The meteorite infused into this case travelled millions of miles through dark space, floating & travelling past millions of planets, galaxies & moons, until its path came into contact with Earth"
    },
]

module.exports = {
    slides,
    discoverWatches
}