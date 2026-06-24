// ===== 闂查奔 1:1 缈荤増 - 涓诲簲鐢ㄩ€昏緫 =====

(function() {
    'use strict';

    // ===== DOM 蹇嵎鏂规硶 =====
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ===== 妯℃嫙鍟嗗搧鏁版嵁 =====
    const mockProducts = [
        { id: 1, title: 'Apple iPhone 15 Pro Max 256GB 鍘熻壊閽涢噾灞?鍑犱箮鍏ㄦ柊', price: 6999, originalPrice: 9999, location: '鏉窞', wantCount: 128, image: 'https://picsum.photos/seed/iphone/400/500', tag: '鎬ュ敭', category: 'digital', seller: '鏁扮爜杈句汉灏忕帇', sellerAvatar: '#FF6B6B', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 86, desc: '鍘诲勾12鏈堣喘鍏ワ紝涓€鐩村甫澹宠创鑶滀娇鐢紝鏃犱换浣曞垝鐥曠纰般€傜數姹犲仴搴峰害98%锛岄厤浠堕綈鍏ㄥ甫鍘熻鐩掑瓙銆傚洜鎹簡鏂版墜鏈烘晠鍑恒€? },
        { id: 2, title: 'MacBook Pro 14瀵?M3 Pro鑺墖 18GB/512GB', price: 12500, originalPrice: 16999, location: '鍖椾含', wantCount: 89, image: 'https://picsum.photos/seed/macbook/400/400', tag: '', category: 'digital', seller: '绉戞妧瀹呭皬鏉?, sellerAvatar: '#4ECDC4', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 124, desc: '2024骞?鏈堣喘鍏ワ紝涓昏鐢ㄤ簬鍔炲叕鍜岃交搴﹀壀杈戯紝寰幆娆℃暟浠?0娆°€傚睆骞曞畬缇庯紝閿洏鏃犳补鍏夛紝閰嶄欢榻愬叏銆? },
        { id: 3, title: 'Nike Air Jordan 1 鑺濆姞鍝ラ厤鑹?43鐮?鍙┛杩囦竴娆?, price: 899, originalPrice: 1499, location: '涓婃捣', wantCount: 56, image: 'https://picsum.photos/seed/shoes/400/550', tag: '', category: 'clothes', seller: '娼瀷鏀惰棌瀹?, sellerAvatar: '#FF8C00', sellerCredit: '淇＄敤鑹ソ', sellerSold: 32, desc: '姝ｅ搧璐叆锛屼粎绌夸竴娆″嚭闂紝鍑犱箮鍏ㄦ柊銆傞瀷搴曟棤纾ㄦ崯锛岄瀷闈㈡棤鎶樼棔銆?3鐮佸亸灏忥紝寤鸿42.5鑴氱┛銆? },
        { id: 4, title: '鎴存．V15鍚稿皹鍣?鍏ㄦ柊鏈媶灏?, price: 3299, originalPrice: 4990, location: '娣卞湷', wantCount: 203, image: 'https://picsum.photos/seed/dyson/400/450', tag: '鍏ㄦ柊', category: 'home', seller: '灞呭濂界墿鎺ㄨ崘', sellerAvatar: '#45B7D1', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 567, desc: '骞翠細濂栧搧锛屽叏鏂版湭鎷嗗皝銆傛埓妫甐15 Detect Absolute锛屽甫婵€鍏夋帰娴嬶紝瀹樼綉鍙煡搴忓垪鍙枫€? },
        { id: 5, title: 'SK-II绁炰粰姘?30ml 涓撴煖姝ｅ搧', price: 680, originalPrice: 1370, location: '骞垮窞', wantCount: 312, image: 'https://picsum.photos/seed/skii/400/420', tag: '', category: 'beauty', seller: '缇庡浠ｈ喘灏忕編', sellerAvatar: '#F06292', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 1023, desc: '鏈嬪弸鏃ユ湰甯﹀洖锛屽洡璐уお澶氱敤涓嶅畬銆?30ml澶х摱瑁咃紝濉戝皝瀹屽ソ锛屼繚璐ㄦ湡鍒?026骞淬€? },
        { id: 6, title: '绱㈠凹PS5娓告垙鏈?鍏夐┍鐗?甯︿袱涓墜鏌?, price: 2800, originalPrice: 3899, location: '鎴愰兘', wantCount: 167, image: 'https://picsum.photos/seed/ps5/400/480', tag: '鐑棬', category: 'digital', seller: '娓告垙鑰佺帺瀹?, sellerAvatar: '#6C5CE7', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 45, desc: '涔版潵鐜╀簡澶у崐骞达紝鐜板湪宸ヤ綔蹇欐病鏃堕棿鐜╀簡銆傚厜椹辩増甯︿袱涓師瑁呮墜鏌勶紝閫佷笁寮犲疄浣撴父鎴忕洏銆? },
        { id: 7, title: '涔愰珮鍏板崥鍩哄凹42115 鏈烘缁?鎷艰繃涓€娆?, price: 1599, originalPrice: 2999, location: '鏉窞', wantCount: 45, image: 'https://picsum.photos/seed/lego/400/460', tag: '', category: 'toy', seller: '涔愰珮鐖卞ソ鑰?, sellerAvatar: '#F9CA24', sellerCredit: '淇＄敤鑹ソ', sellerSold: 18, desc: '鎷艰繃涓€娆″氨鎷嗕簡鏀惧洖鐩掑瓙閲屼簡锛岄浂浠堕綈鍏ㄦ棤缂哄け銆傝鏄庝功鍜屽鐩掗兘鍦紝閫傚悎鏀惰棌鎴栭€佺ぜ銆? },
        { id: 8, title: '澶х枂DJI Mini 4 Pro 鐣呴濂楄 甯﹂殢蹇冩崲', price: 5200, originalPrice: 6988, location: '姝︽眽', wantCount: 98, image: 'https://picsum.photos/seed/drone/400/440', tag: '95鏂?, category: 'digital', seller: '鑸媿鐖卞ソ鑰?, sellerAvatar: '#00B894', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 23, desc: '浠呴杩?娆★紝鎴愯壊95鏂般€傜晠椋炲瑁呭惈涓夊潡鐢垫睜銆佸厖鐢电瀹躲€丯D婊ら暅锛岄殢蹇冩崲鍒?025骞村簳銆? },
        { id: 9, title: '濮嬬楦烞eta AR鍐查攱琛?鐢锋L鐮?榛戣壊', price: 3200, originalPrice: 5400, location: '鍗椾含', wantCount: 76, image: 'https://picsum.photos/seed/jacket/400/500', tag: '', category: 'clothes', seller: '鎴峰瑁呭鍏?, sellerAvatar: '#2D3436', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 67, desc: '涓撴煖姝ｅ搧璐叆锛岀┛鐫€涓嶈秴杩?娆°€侴ore-Tex Pro闈㈡枡锛岄槻姘撮€忔皵鎬ц兘瀹屽ソ銆侺鐮?85宸﹀彸鍚堥€傘€? },
        { id: 10, title: 'Switch OLED鐜嬪浗涔嬫唱闄愬畾鐗?甯︽父鎴?, price: 1800, originalPrice: 2599, location: '閲嶅簡', wantCount: 234, image: 'https://picsum.photos/seed/switch/400/430', tag: '鍖呴偖', category: 'digital', seller: '濉炲皵杈鹃搧绮?, sellerAvatar: '#E17055', sellerCredit: '淇＄敤鑹ソ', sellerSold: 12, desc: '闄愬畾鐗圫witch OLED锛岀璇村叏銆傚甫鐜嬪浗涔嬫唱鍗″甫鍜孭ro鎵嬫焺锛屽睆骞曡创浜嗛挗鍖栬啘锛屾棤鍒掔棔銆? },
        { id: 11, title: '濠村効鎺ㄨ溅 濂藉瀛怗B 杞讳究鎶樺彔 9鎴愭柊', price: 399, originalPrice: 899, location: '鏉窞', wantCount: 34, image: 'https://picsum.photos/seed/stroller/400/470', tag: '', category: 'baby', seller: '瀹濆闂茬疆杞', sellerAvatar: '#FD79A8', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 89, desc: '瀹濆疂澶т簡鐢ㄤ笉涓婁簡锛?鎴愭柊锛屼娇鐢ㄤ笉鍒板崐骞淬€備竴閿姌鍙狅紝鍙笂椋炴満锛屽甫閬槼绡峰拰闆ㄧ僵銆? },
        { id: 12, title: '銆婁笁浣撱€嬪叏濂椾笁鍐?鍒樻厛娆?绮捐鐗?, price: 68, originalPrice: 158, location: '涓婃捣', wantCount: 189, image: 'https://picsum.photos/seed/book/400/510', tag: '', category: 'book', seller: '涔﹁櫕鐨勪功鏋?, sellerAvatar: '#A29BFE', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 456, desc: '绮捐纭３鐗堬紝鍙湅杩囦竴閬嶏紝鍩烘湰鍏ㄦ柊銆備笁浣?-3鍏ㄩ泦锛屼功瑙掓棤鎶樼棔锛屽唴椤垫棤绗旇銆? },
        { id: 13, title: '闆呰瘲鍏伴粵灏忔鐡剁簿鍗?100ml 鍏ㄦ柊', price: 520, originalPrice: 935, location: '鍖椾含', wantCount: 156, image: 'https://picsum.photos/seed/cream/400/390', tag: '', category: 'beauty', seller: '娴锋窐灏忚兘鎵?, sellerAvatar: '#D980FA', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 234, desc: '缇庡浗瀹樼綉娴锋窐璐叆锛屽叏鏂版湭寮€灏併€傜涓冧唬灏忔鐡讹紝100ml澶у閲忥紝淇濊川鏈熷埌2027骞淬€? },
        { id: 14, title: '灏忕背鐢靛姩婊戞澘杞ro 缁埅45km', price: 1599, originalPrice: 2799, location: '娣卞湷', wantCount: 67, image: 'https://picsum.photos/seed/scooter/400/490', tag: '鑷彁', category: 'sports', seller: '閫氬嫟涓€鏃?, sellerAvatar: '#0984E3', sellerCredit: '淇＄敤鑹ソ', sellerSold: 8, desc: '鍏徃鎼鍚庝笉闇€瑕佷簡锛岀敤浜嗗崐骞淬€傜画鑸疄娴?0km+锛屾渶楂樻椂閫?5km/h锛岄厤浠堕綈鍏ㄣ€傞檺娣卞湷鑷彁銆? },
        { id: 15, title: '浠诲ぉ鍫?amiibo 濉炲皵杈句紶璇?鍏ㄥ8娆?, price: 450, originalPrice: 800, location: '骞垮窞', wantCount: 41, image: 'https://picsum.photos/seed/amiibo/400/410', tag: '', category: 'toy', seller: 'Switch鏀惰棌瀹?, sellerAvatar: '#E17055', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 156, desc: '鍏ㄥ8娆惧灏旇揪amiibo锛屼粎鎷嗗皝鏈娇鐢ㄣ€傞€傚悎鏀惰棌锛岄檮璧犳敹绾崇洅銆備笉鍗曞嚭锛屾墦鍖呬竴璧峰嚭銆? },
        { id: 16, title: '鍔犳嬁澶ч箙缇界粧鏈?Expedition娲惧厠澶ц。', price: 5800, originalPrice: 9900, location: '鎴愰兘', wantCount: 112, image: 'https://picsum.photos/seed/goose/400/520', tag: '姝ｅ搧', category: 'clothes', seller: '濂緢鍝侀棽缃?, sellerAvatar: '#636E72', sellerCredit: '淇＄敤鏋佸ソ', sellerSold: 234, desc: '鍔犳嬁澶т笓鏌滆喘鍏ワ紝姝ｅ搧鍙獙銆傚彧绌夸簡涓€涓啲澶╋紝淇濇殩鏁堟灉鏋佸ソ銆傞€佸共娲楀簵娓呮礂杩囷紝鎴愯壊寰堝ソ銆侻鐮侊紝閫傚悎175-185銆? }
    ];

    // ===== 妯℃嫙娑堟伅鏁版嵁 =====
    const mockMessages = [
        { id: 1, name: '鏁扮爜杈句汉灏忕帇', avatar: '#FF6B6B', preview: '濂界殑锛屼环鏍煎彲浠ュ晢閲忥紝浣犳柟渚?..', time: '鍒氬垰', unread: 2, type: 'seller' },
        { id: 2, name: '绉戞妧瀹呭皬鏉?, avatar: '#4ECDC4', preview: 'MacBook杩樺湪鍚楋紵', time: '5鍒嗛挓鍓?, unread: 0, type: 'buyer' },
        { id: 3, name: '闂查奔灏忓姪鎵?, avatar: '#FF5000', preview: '鎮ㄧ殑瀹濊礉"iPhone 15 Pro"鑾峰緱...', time: '1灏忔椂鍓?, unread: 1, type: 'system' },
        { id: 4, name: '娼瀷鏀惰棌瀹?, avatar: '#FF8C00', preview: '43鐮佹垜绌垮彲鑳芥湁鐐瑰ぇ...', time: '2灏忔椂鍓?, unread: 0, type: 'buyer' },
        { id: 5, name: '灞呭濂界墿鎺ㄨ崘', avatar: '#45B7D1', preview: '宸插彂璐э紝璇锋敞鎰忔煡鏀?, time: '鏄ㄥぉ', unread: 0, type: 'seller' },
        { id: 6, name: '娓告垙鑰佺帺瀹?, avatar: '#6C5CE7', preview: 'PS5鎴戝凡缁忔媿涓嬩簡', time: '鏄ㄥぉ', unread: 0, type: 'buyer' },
        { id: 7, name: '绯荤粺閫氱煡', avatar: '#999', preview: '鎮ㄧ殑璐﹀彿瀹夊叏绛夌骇宸叉彁鍗?, time: '3澶╁墠', unread: 0, type: 'system' },
        { id: 8, name: '缇庡浠ｈ喘灏忕編', avatar: '#F06292', preview: '绁炰粰姘磋繕鏈夊悧锛熸垜鎯宠', time: '3澶╁墠', unread: 0, type: 'buyer' }
    ];

    // ===== 妯℃嫙楸煎鏁版嵁 =====
    const mockFishponds = [
        { id: 1, icon: '馃摫', title: '鏁扮爜鐖卞ソ鑰?, desc: '12.6涓囦汉', color: '#E8F5FF' },
        { id: 2, icon: '馃憻', title: '娼瀷浜ゆ祦鍦?, desc: '8.3涓囦汉', color: '#FFF0E8' },
        { id: 3, icon: '馃拕', title: '缇庡闂茬疆浜ゆ崲', desc: '15.2涓囦汉', color: '#FFE8F0' },
        { id: 4, icon: '馃幃', title: '涓绘満娓告垙鐜╁', desc: '9.7涓囦汉', color: '#F0E8FF' },
        { id: 5, icon: '馃彔', title: '瀹跺眳濂界墿鍒嗕韩', desc: '6.8涓囦汉', color: '#E8FFE8' },
        { id: 6, icon: '馃懚', title: '瀹濆闂茬疆缇?, desc: '11.4涓囦汉', color: '#FFF8E8' },
        { id: 7, icon: '馃摎', title: '浜屾墜涔︿氦鏄?, desc: '5.2涓囦汉', color: '#FFE8E8' },
        { id: 8, icon: '馃弮', title: '杩愬姩瑁呭', desc: '7.1涓囦汉', color: '#E8F0FF' }
    ];

    // ===== 鐘舵€佺鐞?=====
    let state = {
        currentPage: 'home',
        currentCategory: 'all',
        currentBanner: 0,
        bannerTimer: null,
        products: [...mockProducts],
        favorites: new Set(),
        currentDetailProduct: null,
        currentChatUser: null,
        chatMessages: [],
        loadedCount: 8
    };

    // ===== Toast 鎻愮ず =====
    const toast = $('#toast');
    function showToast(msg, duration = 2000) {
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    // ===== 娓叉煋鍟嗗搧鍒楄〃锛堢€戝竷娴侊級 =====
    function renderProducts(filter = 'all') {
        const productList = $('#productList');
        if (!productList) return;
        
        let filtered = filter === 'all' ? state.products : state.products.filter(p => p.category === filter);
        
        productList.innerHTML = filtered.map(p => `
            <div class="product-card" data-id="${p.id}">
                <div class="product-img-wrap">
                    <img src="${p.image}" alt="${p.title}" loading="lazy"
                         onerror="this.style.minHeight='${160 + Math.random()*80}px';this.style.background='linear-gradient(135deg,#f0f0f0,#e0e0e0)'">
                    ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-title">${p.title}</div>
                    <div class="product-price"><span class="unit">楼</span>${p.price}</div>
                    <div class="product-meta">
                        <span class="product-location">
                            <svg viewBox="0 0 24 24" width="10" height="10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#999"/></svg>
                            ${p.location}
                        </span>
                        <span class="product-want">${p.wantCount}浜烘兂瑕?/span>
                    </div>
                </div>
            </div>
        `).join('');

        // 缁戝畾鍟嗗搧鐐瑰嚮 - 鎵撳紑璇︽儏
        productList.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const product = state.products.find(p => p.id === id);
                if (product) openDetail(product);
            });
        });
    }

    // ===== 鍒囨崲鍒嗙被 =====
    function switchCategory(cat) {
        state.currentCategory = cat;
        $$('.category-item').forEach(item => {
            item.classList.toggle('active', item.dataset.cat === cat);
        });
        renderProducts(cat);
        const activeItem = document.querySelector(`.category-item[data-cat="${cat}"]`);
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    // ===== Banner 杞挱 =====
    function initBanner() {
        const bannerSlider = $('#bannerSlider');
        const bannerDots = $('#bannerDots');
        if (!bannerSlider || !bannerDots) return;
        
        const dots = bannerDots.querySelectorAll('.dot');
        const total = dots.length;

        function goToSlide(index) {
            state.currentBanner = index;
            bannerSlider.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        }

        function nextSlide() { goToSlide((state.currentBanner + 1) % total); }

        state.bannerTimer = setInterval(nextSlide, 3000);

        let startX = 0;
        bannerSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            clearInterval(state.bannerTimer);
        });
        bannerSlider.addEventListener('touchend', (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                goToSlide(diff > 0 ? (state.currentBanner + 1) % total : (state.currentBanner - 1 + total) % total);
            }
            state.bannerTimer = setInterval(nextSlide, 3000);
        });
    }

    // ===== 鍟嗗搧璇︽儏娴眰 =====
    function openDetail(product) {
        state.currentDetailProduct = product;
        const overlay = $('#detailOverlay');
        if (!overlay) return;

        $('#detailImages').innerHTML = `<img src="${product.image}" alt="${product.title}">`;
        $('#detailPrice').innerHTML = `<span class="unit">楼</span>${product.price}<span style="font-size:13px;color:#999;font-weight:400;margin-left:8px;text-decoration:line-through">楼${product.originalPrice}</span>`;
        $('#detailTitle').textContent = product.title;
        $('#detailTags').innerHTML = product.tag ? `<span class="detail-tag">${product.tag}</span>` : '';
        $('#detailDesc').textContent = product.desc || '鍗栧寰堟噿锛岃繕娌℃湁濉啓鎻忚堪...';

        $('#detailSeller').innerHTML = `
            <div class="detail-seller-avatar" style="background:${product.sellerAvatar || '#f0f0f0'};color:#fff;font-size:18px;font-weight:600">${product.seller.charAt(0)}</div>
            <div class="detail-seller-info">
                <div class="detail-seller-name">${product.seller}</div>
                <div class="detail-seller-badge">${product.sellerCredit || '淇＄敤鑹ソ'}</div>
            </div>
            <div class="detail-seller-stats">宸插崠鍑?{product.sellerSold || 0}浠?/div>
        `;

        // 鏀惰棌鐘舵€?        const btnFav = $('#btnFav');
        if (state.favorites.has(product.id)) {
            btnFav.classList.add('faved');
            btnFav.querySelector('span').textContent = '宸叉敹钘?;
        } else {
            btnFav.classList.remove('faved');
            btnFav.querySelector('span').textContent = '鏀惰棌';
        }

        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeDetail() {
        const overlay = $('#detailOverlay');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ===== 鑱婂ぉ娴眰 =====
    function openChat(user) {
        state.currentChatUser = user;
        state.chatMessages = [
            { text: '浣犲ソ锛岃繖涓疂璐濊繕鍦ㄥ悧锛?, me: true },
            { text: '鍦ㄧ殑锛屼翰鎯宠鐨勮瘽鍙互鐩存帴鎷嶅摝~', me: false },
            { text: '浠锋牸杩樿兘渚垮疁鐐瑰悧锛?, me: true },
            { text: '鍙互灏忓垁鍝︼紝鎮ㄨ涓績鐞嗕环浣?, me: false }
        ];

        const overlay = $('#chatOverlay');
        if (!overlay) return;

        $('#chatName').textContent = user.name || user.seller || '鍗栧';
        renderChatMessages();
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const input = $('#chatInput');
            if (input) input.focus();
        }, 300);
    }

    function closeChat() {
        const overlay = $('#chatOverlay');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    function renderChatMessages() {
        const container = $('#chatMessages');
        if (!container) return;
        container.innerHTML = state.chatMessages.map(m => `
            <div class="chat-bubble ${m.me ? 'me' : 'other'}">${m.text}</div>
        `).join('');
        container.scrollTop = container.scrollHeight;
    }

    function sendMessage() {
        const input = $('#chatInput');
        if (!input) return;
        const text = input.value.trim();
        if (!text) return;

        state.chatMessages.push({ text, me: true });
        input.value = '';
        renderChatMessages();

        // 妯℃嫙鍥炲
        setTimeout(() => {
            const replies = [
                '濂界殑锛屾垜鑰冭檻涓€涓媬',
                '鍙互锛岄偅灏辫繖涔堝畾浜?,
                '宸插彂璐э紝璇锋敞鎰忔煡鏀?,
                '鍦ㄧ殑锛岄殢鏃跺彲浠ユ媿',
                '鍙互灏忓垁锛屾偍璇翠釜浠?
            ];
            state.chatMessages.push({ text: replies[Math.floor(Math.random() * replies.length)], me: false });
            renderChatMessages();
        }, 800 + Math.random() * 1200);
    }

    // ===== 娓叉煋娑堟伅鍒楄〃 =====
    function renderMessages(filter = 'all') {
        const list = $('#messageList');
        if (!list) return;
        
        let filtered = filter === 'all' ? mockMessages : mockMessages.filter(m => m.type === filter);
        
        list.innerHTML = filtered.map(m => `
            <div class="message-item" data-id="${m.id}">
                <div class="msg-avatar" style="background:${m.avatar}">${m.name.charAt(0)}</div>
                <div class="msg-content">
                    <div class="msg-title">${m.name}</div>
                    <div class="msg-preview">${m.preview}</div>
                </div>
                <div style="text-align:right;flex-shrink:0">
                    <div class="msg-time">${m.time}</div>
                    ${m.unread > 0 ? `<div class="msg-unread">${m.unread}</div>` : ''}
                </div>
            </div>
        `).join('');

        list.querySelectorAll('.message-item').forEach(item => {
            item.addEventListener('click', () => {
                const msg = mockMessages.find(m => m.id === parseInt(item.dataset.id));
                if (msg) openChat({ name: msg.name });
            });
        });
    }

    // ===== 娓叉煋楸煎鍒楄〃 =====
    function renderFishponds() {
        const grid = $('#fishpondList');
        if (!grid) return;
        
        grid.innerHTML = mockFishponds.map(fp => `
            <div class="fp-card">
                <div class="fp-card-icon">${fp.icon}</div>
                <div class="fp-card-title">${fp.title}</div>
                <div class="fp-card-desc">${fp.desc}</div>
            </div>
        `).join('');

        grid.querySelectorAll('.fp-card').forEach((card, i) => {
            card.addEventListener('click', () => {
                showToast(`姝ｅ湪杩涘叆${mockFishponds[i].title}...`);
            });
        });
    }

    // ===== 椤甸潰鍒囨崲 =====
    function switchPage(page) {
        state.currentPage = page;

        $$('.page').forEach(p => p.classList.remove('active'));

        const pageMap = {
            'home': 'pageHome',
            'messages': 'pageMessages',
            'profile': 'pageProfile',
            'publish': 'pagePublish',
            'fishpond': 'pageFishpond'
        };

        const pageId = pageMap[page] || 'pageHome';
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');

        $$('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (page === 'home') renderProducts(state.currentCategory);
        if (page === 'messages') renderMessages();
        if (page === 'fishpond') renderFishponds();
    }

    // ===== 浜嬩欢缁戝畾 =====
    function bindEvents() {
        // 搴曢儴瀵艰埅
        $$('.nav-item').forEach(item => {
            item.addEventListener('click', () => switchPage(item.dataset.page));
        });

        // 鍒嗙被鍒囨崲
        const categoryScroll = $('#categoryScroll');
        if (categoryScroll) {
            categoryScroll.addEventListener('click', (e) => {
                const item = e.target.closest('.category-item');
                if (item) switchCategory(item.dataset.cat);
            });
        }

        // 鍒嗙被鏇村
        const categoryMoreBtn = $('#categoryMoreBtn');
        if (categoryMoreBtn) {
            categoryMoreBtn.addEventListener('click', () => {
                categoryScroll.scrollTo({ left: 0, behavior: 'smooth' });
                switchCategory('all');
            });
        }

        // 鍩庡競閫夋嫨
        const locationBtn = $('#locationBtn');
        const locationModal = $('#locationModal');
        if (locationBtn && locationModal) {
            locationBtn.addEventListener('click', () => locationModal.classList.add('show'));
            $('#closeLocationModal').addEventListener('click', () => locationModal.classList.remove('show'));
            locationModal.addEventListener('click', (e) => {
                if (e.target === locationModal) locationModal.classList.remove('show');
            });
            $$('.city-tag').forEach(tag => {
                tag.addEventListener('click', () => {
                    const locText = $('.location-text');
                    if (locText) locText.textContent = tag.textContent;
                    locationModal.classList.remove('show');
                    showToast(`宸插垏鎹㈠埌${tag.textContent}`);
                });
            });
        }

        // 璇︽儏娴眰鍏抽棴
        const detailOverlay = $('#detailOverlay');
        if (detailOverlay) {
            $('#detailClose').addEventListener('click', closeDetail);
            detailOverlay.addEventListener('click', (e) => {
                if (e.target === detailOverlay) closeDetail();
            });
        }

        // 璇︽儏娴眰鎸夐挳
        const btnFav = $('#btnFav');
        if (btnFav) {
            btnFav.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (!product) return;
                if (state.favorites.has(product.id)) {
                    state.favorites.delete(product.id);
                    btnFav.classList.remove('faved');
                    btnFav.querySelector('span').textContent = '鏀惰棌';
                    showToast('宸插彇娑堟敹钘?);
                } else {
                    state.favorites.add(product.id);
                    btnFav.classList.add('faved');
                    btnFav.querySelector('span').textContent = '宸叉敹钘?;
                    showToast('宸插姞鍏ユ敹钘?);
                }
            });
        }

        const btnChat = $('#btnChat');
        if (btnChat) {
            btnChat.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (product) {
                    closeDetail();
                    setTimeout(() => openChat({ name: product.seller }), 300);
                }
            });
        }

        const btnWant = $('#btnWant');
        if (btnWant) {
            btnWant.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (product) {
                    showToast('宸叉彁浜よ喘涔版剰鍚戯紝绛夊緟鍗栧纭');
                    setTimeout(closeDetail, 1500);
                }
            });
        }

        // 鑱婂ぉ娴眰
        const chatOverlay = $('#chatOverlay');
        if (chatOverlay) {
            $('#chatBack').addEventListener('click', closeChat);
            $('#btnSend').addEventListener('click', sendMessage);
            const chatInput = $('#chatInput');
            if (chatInput) {
                chatInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') sendMessage();
                });
            }
        }

        // 娑堟伅鎸夐挳
        const msgBtn = $('#msgBtn');
        if (msgBtn) {
            msgBtn.addEventListener('click', () => switchPage('messages'));
        }

        // 娑堟伅鏍囩鍒囨崲
        $$('.msg-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                $$('.msg-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderMessages(tab.dataset.tab);
            });
        });

        // 鎼滅储
        const searchInput = $('#searchInput');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.removeAttribute('readonly');
                showToast('杈撳叆鍏抽敭璇嶆悳绱㈤棽缃ソ鐗?);
            });
            searchInput.addEventListener('blur', () => {
                if (!searchInput.value) searchInput.setAttribute('readonly', '');
            });
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const keyword = searchInput.value.trim();
                    const productList = $('#productList');
                    if (keyword && productList) {
                        const filtered = state.products.filter(p =>
                            p.title.toLowerCase().includes(keyword.toLowerCase())
                        );
                        productList.innerHTML = filtered.length ?
                            filtered.map(p => renderProductCardHTML(p)).join('') :
                            '<div class="load-more">娌℃湁鎵惧埌鐩稿叧瀹濊礉</div>';
                        productList.querySelectorAll('.product-card').forEach(card => {
                            card.addEventListener('click', () => {
                                const id = parseInt(card.dataset.id);
                                const product = state.products.find(p => p.id === id);
                                if (product) openDetail(product);
                            });
                        });
                    } else if (productList) {
                        renderProducts(state.currentCategory);
                    }
                }
            });
        }

        // 鎵爜鎸夐挳
        const scanBtn = $('#scanBtn');
        if (scanBtn) {
            scanBtn.addEventListener('click', () => showToast('鎵爜鎼滅储鍔熻兘寮€鍙戜腑...'));
        }

        // 鎹竴鎵规寜閽?        const refreshBtn = $('#refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                state.products = [...mockProducts].sort(() => Math.random() - 0.5);
                renderProducts(state.currentCategory);
                showToast('宸插埛鏂版帹鑽?);
            });
        }

        // 蹇嵎鍏ュ彛
        $$('.entry-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                if (action === 'publish') switchPage('publish');
                else if (action === 'fishpond') switchPage('fishpond');
                else showToast('鍔熻兘寮€鍙戜腑...');
            });
        });

        // 鍙戝竷鎸夐挳
        const publishBtn = $('.btn-publish');
        if (publishBtn) {
            publishBtn.addEventListener('click', () => {
                showToast('鍙戝竷鎴愬姛锛?);
                setTimeout(() => switchPage('home'), 1500);
            });
        }

        // 涓婁紶鍖哄煙
        const uploadArea = $('#uploadArea');
        if (uploadArea) {
            uploadArea.addEventListener('click', () => showToast('閫夋嫨鍥剧墖涓婁紶'));
        }

        // 缂栬緫璧勬枡
        const btnEditProfile = $('.btn-edit-profile');
        if (btnEditProfile) {
            btnEditProfile.addEventListener('click', () => showToast('缂栬緫璧勬枡鍔熻兘寮€鍙戜腑...'));
        }

        // 鑿滃崟椤圭偣鍑?        $$('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('span').textContent;
                showToast(`${text}鍔熻兘寮€鍙戜腑...`);
            });
        });

        // 璁㈠崟鍥炬爣
        $$('.order-icon-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('span').textContent;
                showToast(`鏌ョ湅${text}璁㈠崟`);
            });
        });

        // 杩斿洖椤堕儴
        const btnBackTop = $('#btnBackTop');
        if (btnBackTop) {
            btnBackTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            window.addEventListener('scroll', () => {
                btnBackTop.classList.toggle('show', window.scrollY > 500);
            });
        }

        // 涓婃媺鍔犺浇鏇村
        const loadMore = $('#loadMore');
        if (loadMore) {
            loadMore.addEventListener('click', () => {
                showToast('鍔犺浇涓?..');
                setTimeout(() => {
                    const extra = mockProducts.map(p => ({ ...p, id: p.id + 100 }));
                    state.products = [...state.products, ...extra];
                    renderProducts(state.currentCategory);
                    showToast('鍔犺浇瀹屾垚');
                }, 800);
            });
        }

        // 閿洏蹇嵎閿?        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDetail();
                closeChat();
                const locationModal = $('#locationModal');
                if (locationModal) locationModal.classList.remove('show');
            }
        });

        // 鐘舵€佹爮鏃堕棿鏇存柊
        updateStatusBarTime();
        setInterval(updateStatusBarTime, 30000);
    }

    function updateStatusBarTime() {
        const timeEl = $('.time');
        if (timeEl) {
            const now = new Date();
            timeEl.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        }
    }

    function renderProductCardHTML(p) {
        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-img-wrap">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                    ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-title">${p.title}</div>
                    <div class="product-price"><span class="unit">楼</span>${p.price}</div>
                    <div class="product-meta">
                        <span class="product-location">
                            <svg viewBox="0 0 24 24" width="10" height="10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#999"/></svg>
                            ${p.location}
                        </span>
                        <span class="product-want">${p.wantCount}浜烘兂瑕?/span>
                    </div>
                </div>
            </div>
        `;
    }

    // ===== 鍒濆鍖?=====
    function init() {
        renderProducts();
        initBanner();
        bindEvents();
        switchPage('home');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();