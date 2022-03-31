(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shop.zecko.co',
      storefrontAccessToken: 'a25ad48cb5c883dc7fc3ab0611410612',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7583605489910',
        node: document.getElementById('product-component-497001a3-57e7-4a73-8d44-9f171ff0f2a9'),
        moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "carousel-button": {
          "display": "none"
        }
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#275196"
        },
        "background-color": "#2b5aa7",
        ":focus": {
          "background-color": "#275196"
        },
        "border-radius": "40px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "price": {
        "font-family": "Roboto, sans-serif"
      },
      "compareAt": {
        "font-family": "Roboto, sans-serif"
      },
      "unitPrice": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "options": false
    },
    "text": {
      "button": "View | Add to Cart"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#275196"
        },
        "background-color": "#2b5aa7",
        ":focus": {
          "background-color": "#275196"
        },
        "border-radius": "40px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "googleFonts": [
      "Roboto"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#275196"
        },
        "background-color": "#2b5aa7",
        ":focus": {
          "background-color": "#275196"
        },
        "border-radius": "40px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#2b5aa7",
        ":hover": {
          "background-color": "#275196"
        },
        ":focus": {
          "background-color": "#275196"
        }
      },
      "count": {
        "font-size": "16px"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  }
},
      });
    });
  }
})();