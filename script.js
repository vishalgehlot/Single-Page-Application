function getProducts() {
    var productList = [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }, { "id": 2, "title": "Mens Casual Premium Slim Fit T-Shirts ", "price": 22.3, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "rating": { "rate": 4.1, "count": 259 } }, { "id": 3, "title": "Mens Cotton Jacket", "price": 55.99, "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "rating": { "rate": 4.7, "count": 500 } }, { "id": 4, "title": "Mens Casual Slim Fit", "price": 15.99, "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", "rating": { "rate": 2.1, "count": 430 } }, { "id": 5, "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "price": 695, "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 4.6, "count": 400 } }, { "id": 6, "title": "Solid Gold Petite Micropave ", "price": 168, "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "category": "jewelery", "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3.9, "count": 70 } }, { "id": 7, "title": "White Gold Plated Princess", "price": 9.99, "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", "category": "jewelery", "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3, "count": 400 } }, { "id": 8, "title": "Pierced Owl Rose Gold Plated Stainless Steel Double", "price": 10.99, "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel", "category": "jewelery", "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 1.9, "count": 100 } }, { "id": 9, "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ", "price": 64, "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system", "category": "electronics", "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "rating": { "rate": 3.3, "count": 203 } }, { "id": 10, "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "price": 109, "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "category": "electronics", "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 470 } }, { "id": 11, "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "price": 109, "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", "category": "electronics", "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 319 } }, { "id": 12, "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", "price": 114, "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty", "category": "electronics", "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 400 } }, { "id": 13, "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "price": 599, "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz", "category": "electronics", "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 250 } }, { "id": 14, "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", "price": 999.99, "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag", "category": "electronics", "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "rating": { "rate": 2.2, "count": 140 } }, { "id": 15, "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", "price": 56.99, "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates", "category": "women's clothing", "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", "rating": { "rate": 2.6, "count": 235 } }, { "id": 16, "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", "price": 29.95, "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON", "category": "women's clothing", "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg", "rating": { "rate": 2.9, "count": 340 } }, { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }, { "id": 18, "title": "MBJ Women's Solid Short Sleeve Boat Neck V ", "price": 9.85, "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", "rating": { "rate": 4.7, "count": 130 } }, { "id": 19, "title": "Opna Women's Short Sleeve Moisture", "price": 7.95, "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort", "category": "women's clothing", "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", "rating": { "rate": 4.5, "count": 146 } }, { "id": 20, "title": "DANVOUY Womens T Shirt Casual Cotton Short", "price": 12.99, "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", "rating": { "rate": 3.6, "count": 145 } }];
    return productList;
}
function getDataFromStorage() {
    var data = localStorage.getItem("productList");
    data = JSON.parse(data);
    return data;
}
function CreateHeader() {
    var mainDiv = document.querySelector("#mainDiv");

    var header = document.createElement("header");
    header.setAttribute("style", "width:100%; height:90px;");
    header.setAttribute("class", "bg-dark d-flex justify-content-between");

    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("class", "d-flex justify-content-center align-items-center");
    logoDiv.setAttribute("style", "width:20%;height:70px;");

    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", "./images/amozon.png");
    imgElement.setAttribute("style", "width:50%; height:90px;");
    logoDiv.appendChild(imgElement);

    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("style", "width:50%; height:70px;");
    searchDiv.setAttribute("class", "d-flex justify-content-center align-items-center");

    var searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search product");
    searchInput.setAttribute("style", "width:70%;height:40px;");
    searchInput.setAttribute("id", "searchKeyword");
    searchInput.addEventListener("keyup", () => {
        SearchProduct();
    });
    searchDiv.appendChild(searchInput);

    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("style", "width:20%; height:70px;");
    menuDiv.setAttribute("class", "d-flex justify-content-around align-items-center");
    if (isLoggedIn()) {
        var viewCart = document.createElement("span");
        viewCart.innerText = "View Cart";
        viewCart.setAttribute("style", "color:white; cursor:pointer;");

        viewCart.addEventListener("click", () => {
            var cartDiv = document.querySelector("#cart-container");
            cartDiv.innerHTML = "";
            var currentUser = sessionStorage.getItem("currentUser");
            var cartList = JSON.parse(localStorage.getItem("cartList"));
            var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
            var cartItems = currentUserCartList.cartItems;
            var container = document.createElement("div");
            container.setAttribute("class", "container mt-5");

            var rowDiv = document.createElement("div");
            rowDiv.setAttribute("class", "row");

            var leftContainer = document.createElement("div");
            leftContainer.setAttribute("class", "col-md-8");

            // creating table in left container
            var table = document.createElement("table");
            table.setAttribute("class", "table");

            var thead = document.createElement("thead");

            var tr = document.createElement("tr");
            var sNo = document.createElement("td");
            sNo.innerText = "S.no";
            tr.appendChild(sNo);
            var name = document.createElement("td");
            name.innerText = "Name";
            tr.appendChild(name);
            var price = document.createElement("td");
            price.innerText = "Price";
            tr.appendChild(price);
            var qty = document.createElement("td");
            qty.innerText = "Qty";
            tr.appendChild(qty);
            var total = document.createElement("td");
            total.innerText = "Total";
            tr.appendChild(total);

            thead.appendChild(tr);

            var tbody = document.createElement("tbody");
            for (var index in cartItems) {
                let tr = document.createElement("tr");
                let sNo = document.createElement("td");
                sNo.innerText = "" + (index * 1 + 1);
                tr.appendChild(sNo);

                let name = document.createElement("td");
                name.innerText = cartItems[index].title;
                tr.appendChild(name);

                let price = document.createElement("td");
                price.innerText = cartItems[index].price;
                tr.appendChild(price);

                let qty = document.createElement("td");
                qty.innerHTML = "<input onchange='updateQty(" + cartItems[index].id + "," + index + ")' style='width:50px' id='qtyChange" + index + "' type='number' min='1' value='1'/>";
                tr.appendChild(qty);

                let total = document.createElement("td");
                total.setAttribute("id", "total" + index);
                total.innerText = cartItems[index].price;
                tr.appendChild(total);
                tbody.appendChild(tr);
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            leftContainer.appendChild(table);

            var rightContainer = document.createElement("div");
            rightContainer.setAttribute("class", "col-md-3 offset-1");

            var h1 = document.createElement("h1");
            h1.innerText = "Order Details";
            h1.setAttribute("class", "text-center");
            var hr = document.createElement("hr");

            var totalItems = document.createElement("p");
            totalItems.innerHTML = "Total Items : " + cartItems.length;

            var totalBillAmount = document.createElement("p");
            totalBillAmount.setAttribute("id", "totalBillLabel");
            totalBillAmount.innerHTML = "Total Bill : " + getBillAmount();

            var checkoutButton = document.createElement("button");
            checkoutButton.innerText = "Checkout";
            checkoutButton.setAttribute("class", "btn btn-warning");
            checkoutButton.setAttribute("style", "width:90%; margin:auto;");

            rightContainer.appendChild(h1);
            rightContainer.appendChild(hr);
            rightContainer.appendChild(totalItems);
            rightContainer.appendChild(totalBillAmount);
            rightContainer.appendChild(checkoutButton);

            rowDiv.appendChild(leftContainer);
            rowDiv.appendChild(rightContainer);


            container.appendChild(rowDiv);
            cartDiv.appendChild(container);
        });
        var signOut = document.createElement("span");
        signOut.innerText = "Sign out";
        signOut.setAttribute("style", "color:white;cursor:pointer");

        signOut.addEventListener("click", () => {
            SignOut(menuDiv);
        });

        menuDiv.appendChild(viewCart);
        menuDiv.appendChild(signOut);
    }
    else {
        var signInOptions = document.createElement("span");
        signInOptions.innerText = "Sign in";
        signInOptions.setAttribute("style", "color:white; cursor:pointer;");

        signInOptions.addEventListener("click", () => {
            SignInComponent();
        })
        var signUpOptions = document.createElement("span");
        signUpOptions.innerText = "Sign up";
        signUpOptions.setAttribute("style", "color:white;cursor:pointer");

        signUpOptions.addEventListener("click", () => {
            SignUpComponent();
        });

        menuDiv.appendChild(signInOptions);
        menuDiv.appendChild(signUpOptions);
    }
    header.appendChild(logoDiv);
    header.appendChild(searchDiv);
    header.appendChild(menuDiv);
    mainDiv.appendChild(header);
}

function createCart(data) {
    var mainDiv = document.querySelector("#mainDiv");

    var cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "container-fluid mt-5 p-2 d-flex flex-wrap justify-content-around");
    cartContainer.setAttribute("style", "row-gap:10px;");
    cartContainer.setAttribute("id", "cart-container");

    for (let product of data) {
        var cartDiv = document.createElement("div");
        cartDiv.setAttribute("style", "width:30%; height:430px; box-shadow: 10px 10px 10px grey;");
        cartDiv.setAttribute("class", "d-flex flex-column align-items-center")
        var productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%; height:300px;");

        var h3 = document.createElement("h3");
        h3.innerText = product.title;
        h3.setAttribute("class", "text-center");

        var p = document.createElement("p");
        p.innerHTML = "Price : <span class='text-success'>" + product.price + " Rs.</span>";
        p.setAttribute("class", "text-center");

        var addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";
        addToCart.setAttribute("style", "width:90%; height:40px;")
        addToCart.setAttribute("class", "bg-dark text-white");
        addToCart.addEventListener("click", () => {
            if (isLoggedIn())
                saveProductInToCart(product);
            else
                window.alert("Sign in first");
        });
        cartDiv.appendChild(productImg);
        cartDiv.appendChild(h3);
        cartDiv.appendChild(p);
        cartDiv.appendChild(addToCart);
        cartContainer.appendChild(cartDiv);
    }

    mainDiv.appendChild(cartContainer);
}
function saveProductInToCart(product) {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    let currentUserCartItems = cartList.find((obj) => { return obj.email == currentUser });
    if (currentUserCartItems) {
        var currentUserItemList = currentUserCartItems.cartItems;
        var productObj = currentUserItemList.find((obj) => { return obj.id == product.id });
        console.log(productObj);
        if (productObj)
            window.alert("Product is already added into cart");
        else {
            var index = cartList.findIndex((obj) => { return obj.email == currentUser });
            product.qty = 1;
            currentUserCartItems.cartItems.push(product);
            cartList.splice(index, 1);
            cartList.push(currentUserCartItems);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            window.alert("Product added successfully...");
        }
    }
    else {
        var obj = { email: currentUser, cartItems: [] };
        product.qty = 1;
        obj.cartItems.push(product);
        cartList.push(obj);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        window.alert("Prduct successfully added");
    }
}
function SignInComponent() {
    var mainDiv = document.querySelector("#mainDiv");

    mainDiv.innerHTML = "";

    var container = document.createElement("div");
    container.setAttribute("style", "box-shadow:10px 10px 10px grey; padding:20px; width:30%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");

    var divFormGroupFirst = document.createElement("div");
    divFormGroupFirst.setAttribute("class", "form-group");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter email id");
    emailInput.setAttribute("id", "email");
    divFormGroupFirst.appendChild(emailInput);
    container.appendChild(divFormGroupFirst);

    var divFormGroupSecond = document.createElement("div");
    divFormGroupSecond.setAttribute("class", "form-group");
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter password");
    passwordInput.setAttribute("id", "password");

    divFormGroupSecond.appendChild(passwordInput);
    container.appendChild(divFormGroupSecond);

    var signInSubmitButton = document.createElement("button");
    signInSubmitButton.setAttribute("class", "btn btn-secondary mt-2");
    signInSubmitButton.innerText = "Sign in";

    signInSubmitButton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        signIn(email, password);
    })
    var signUpLabel = document.createElement("span");
    signUpLabel.innerText = "Create New Account";
    signUpLabel.setAttribute("class", "text-danger ml-5");
    signUpLabel.setAttribute("role", "button");
    signUpLabel.addEventListener("click", () => {
        SignUpComponent();
    });
    container.appendChild(signInSubmitButton);
    container.appendChild(signUpLabel);
    mainDiv.appendChild(container);
}
function SignUpComponent() {
    var mainDiv = document.querySelector("#mainDiv");

    mainDiv.innerHTML = "";

    var container = document.createElement("div");
    container.setAttribute("style", "box-shadow:10px 10px 10px grey; padding:20px; width:30%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");

    var divFormGroupFirst = document.createElement("div");
    divFormGroupFirst.setAttribute("class", "form-group");
    var emailInput = document.createElement("input");
    emailInput.setAttribute("class", "form-control");
    emailInput.setAttribute("placeholder", "Enter email id");
    emailInput.setAttribute("id", "email");
    divFormGroupFirst.appendChild(emailInput);
    container.appendChild(divFormGroupFirst);

    var divFormGroupSecond = document.createElement("div");
    divFormGroupSecond.setAttribute("class", "form-group");
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("class", "form-control");
    passwordInput.setAttribute("placeholder", "Enter password");
    passwordInput.setAttribute("id", "password");
    divFormGroupSecond.appendChild(passwordInput);
    container.appendChild(divFormGroupSecond);

    var signUpSubmitButton = document.createElement("button");
    signUpSubmitButton.setAttribute("class", "btn btn-secondary mt-2");
    signUpSubmitButton.innerText = "Sign up";
    signUpSubmitButton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        if (isUserExist(email, password))
            window.alert("User Already Exist..");
        else {
            var user = { email: email, password: password };
            var userList = JSON.parse(localStorage.getItem("userList"));
            userList.push(user);
            localStorage.setItem("userList", JSON.stringify(userList));
            window.alert("User Registered Successfully");
            SignInComponent();
        }
    });

    var signInLabel = document.createElement("span");
    signInLabel.innerText = "Already have account";
    signInLabel.setAttribute("class", "text-danger ml-5");
    signInLabel.setAttribute("role", "button");
    signInLabel.addEventListener("click", () => {
        SignInComponent();
    });

    container.appendChild(signUpSubmitButton);
    container.appendChild(signInLabel);

    mainDiv.appendChild(container);
}

function isUserExist(email, password) {
    console.log(email + "  " + password);
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email });

    console.log(user);
    return !!user; // user : null | {}
}

function signIn(email, password) {

    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email && user.password == password });

    if (user) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("currentUser", user.email);
        document.querySelector("#mainDiv").innerHTML = "";
        CreateHeader();
        createCart(JSON.parse(localStorage.getItem("productList")));
    }
    else
        window.alert("Sign in Failed...");
}
function isLoggedIn() {
    return !!sessionStorage.getItem("isLoggedIn"); // "true" / null
}
function SignOut(menuDiv) {
    sessionStorage.clear();
    menuDiv.innerHTML = "";
    var signInOptions = document.createElement("span");
    signInOptions.innerText = "Sign in";
    signInOptions.setAttribute("style", "color:white; cursor:pointer;");

    signInOptions.addEventListener("click", () => {
        SignInComponent();
    })
    var signUpOptions = document.createElement("span");
    signUpOptions.innerText = "Sign up";
    signUpOptions.setAttribute("style", "color:white;cursor:pointer");

    signUpOptions.addEventListener("click", () => {
        SignUpComponent();
    });

    menuDiv.appendChild(signInOptions);
    menuDiv.appendChild(signUpOptions);

    document.querySelector("#cart-container").innerHTML = "";
    createCart(JSON.parse(localStorage.getItem("productList")));
}

function getBillAmount() {
    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;
    var totalBill = 0;
    for (var product of cartItems) {
        totalBill = totalBill + product.price * 1 * product.qty * 1;
    }
    return totalBill;
}

function updateQty(productId, index) {
    var qty = document.querySelector("#qtyChange" + index).value;
    var total = document.querySelector("#total" + index);

    var currentUser = sessionStorage.getItem("currentUser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;

    var productIndex = cartItems.findIndex((obj) => { return obj.id == productId });
    var product = cartItems[productIndex];
    product.qty = qty;

    cartItems.splice(productIndex, 1);
    cartItems.splice(productIndex, 0, product);

    currentUserCartList.cartItems = cartItems;

    var currentUserCartListIndex = cartList.findIndex((obj) => { return obj.email == currentUser });
    cartList.splice(currentUserCartListIndex, 1);
    cartList.splice(currentUserCartListIndex, 0, currentUserCartList);
    localStorage.setItem("cartList", JSON.stringify(cartList));

    total.innerText = "" + (product.price * 1 * qty);

    var totalBillLabel = document.querySelector("#totalBillLabel");
    totalBillLabel.innerHTML = "<p>Total Bill : " + getBillAmount() + "</p>";
}

function SearchProduct() {
    var keywords = document.querySelector("#searchKeyword").value;
    var productList = JSON.parse(localStorage.getItem("productList"));
    var filterData = productList.filter((product) => { return product.title.toUpperCase().includes(keywords.toUpperCase()) });

    document.querySelector("#cart-container").remove();
    if (filterData.length == 0)
        createCart(productList);
    else
        createCart(filterData);
}