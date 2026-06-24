// ===== 小雅精品店 - 主应用逻辑 =====

(function() {
    'use strict';

    // ===== DOM 快捷方法 =====
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ===== 模拟商品数据 =====
    const mockProducts = [
        { id: 1, title: '日式简约陶瓷茶杯套装 手工制作', price: 89, originalPrice: 128, location: '杭州', wantCount: 256, image: 'https://picsum.photos/seed/cup/400/400', tag: '新品', category: 'home', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '手工制作的日式简约陶瓷茶杯，一套4个，适合居家使用或送礼。釉面光滑，手感舒适。' },
        { id: 2, title: '纯棉休闲连衣裙 春季新款', price: 168, originalPrice: 268, location: '杭州', wantCount: 189, image: 'https://picsum.photos/seed/dress/400/500', tag: '热销', category: 'clothes', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '100%纯棉面料，舒适透气。春季新款，简约百搭款式，适合日常穿着。' },
        { id: 3, title: '天然精油香薰蜡烛 礼盒装', price: 78, originalPrice: 98, location: '杭州', wantCount: 345, image: 'https://picsum.photos/seed/candle/400/420', tag: '', category: 'home', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '天然植物精油香薰蜡烛，礼盒装含3支不同香型。适合居家氛围营造或送礼。' },
        { id: 4, title: '韩国进口保湿精华液 100ml', price: 128, originalPrice: 198, location: '杭州', wantCount: 567, image: 'https://picsum.photos/seed/skincare/400/450', tag: '热销', category: 'beauty', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '韩国进口保湿精华液，深层补水，适合各种肤质。100ml大容量，性价比高。' },
        { id: 5, title: '复古风格帆布包 大容量', price: 59, originalPrice: 89, location: '杭州', wantCount: 234, image: 'https://picsum.photos/seed/bag/400/480', tag: '', category: 'clothes', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '复古风格帆布包，大容量设计，可装笔记本电脑。结实耐用，适合通勤或旅行。' },
        { id: 6, title: '智能蓝牙音箱 迷你便携', price: 99, originalPrice: 159, location: '杭州', wantCount: 178, image: 'https://picsum.photos/seed/speaker/400/440', tag: '新品', category: 'digital', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '智能蓝牙音箱，迷你便携设计，音质清晰。支持多设备连接，续航时间长。' },
        { id: 7, title: '手工编织羊毛围巾 冬季保暖', price: 198, originalPrice: 298, location: '杭州', wantCount: 89, image: 'https://picsum.photos/seed/scarf/400/500', tag: '', category: 'clothes', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '手工编织羊毛围巾，柔软保暖，冬季必备。多色可选，适合送礼。' },
        { id: 8, title: '进口巧克力礼盒 12支装', price: 68, originalPrice: 88, location: '杭州', wantCount: 456, image: 'https://picsum.photos/seed/chocolate/400/400', tag: '热销', category: 'food', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '进口巧克力礼盒，12支装，多口味组合。适合送礼或自用，口感细腻。' },
        { id: 9, title: '创意桌面收纳盒 多层设计', price: 45, originalPrice: 68, location: '杭州', wantCount: 123, image: 'https://picsum.photos/seed/storage/400/460', tag: '', category: 'home', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '创意桌面收纳盒，多层设计，可收纳文具、化妆品等。简约美观，实用性强。' },
        { id: 10, title: '精美礼品套装 生日送礼', price: 158, originalPrice: 218, location: '杭州', wantCount: 345, image: 'https://picsum.photos/seed/gift/400/430', tag: '推荐', category: 'gift', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '精美礼品套装，包含香薰蜡烛、手工香皂等。适合生日送礼，包装精美。' },
        { id: 11, title: '天然手工香皂套装 4块装', price: 38, originalPrice: 58, location: '杭州', wantCount: 234, image: 'https://picsum.photos/seed/soap/400/470', tag: '', category: 'beauty', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '天然手工香皂套装，4块装，不同香型。温和不刺激，适合敏感肌肤。' },
        { id: 12, title: '便携式充电宝 10000mAh', price: 79, originalPrice: 129, location: '杭州', wantCount: 567, image: 'https://picsum.photos/seed/charger/400/510', tag: '热销', category: 'digital', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '便携式充电宝，10000mAh大容量，支持快充。小巧轻便，适合旅行携带。' },
        { id: 13, title: '进口咖啡豆 250g 精选', price: 58, originalPrice: 78, location: '杭州', wantCount: 189, image: 'https://picsum.photos/seed/coffee/400/390', tag: '', category: 'food', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '进口咖啡豆，250g精选包装。口感醇厚，适合咖啡爱好者。' },
        { id: 14, title: '简约风格手表 石英机芯', price: 198, originalPrice: 298, location: '杭州', wantCount: 123, image: 'https://picsum.photos/seed/watch/400/490', tag: '新品', category: 'digital', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '简约风格手表，石英机芯，精准耐用。适合日常佩戴，百搭款式。' },
        { id: 15, title: '精美首饰盒 皮革材质', price: 68, originalPrice: 98, location: '杭州', wantCount: 234, image: 'https://picsum.photos/seed/jewelrybox/400/410', tag: '', category: 'gift', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '精美首饰盒，皮革材质，多层设计。适合收纳首饰或送礼。' },
        { id: 16, title: '日式风格茶具套装 陶瓷', price: 128, originalPrice: 168, location: '杭州', wantCount: 345, image: 'https://picsum.photos/seed/teaset/400/520', tag: '推荐', category: 'home', seller: '小雅精品店', sellerAvatar: '#4A90D9', sellerCredit: '优质店主', sellerSold: 356, desc: '日式风格茶具套装，陶瓷材质，含茶壶和4个茶杯。适合居家使用或送礼。' }
    ];

    // ===== 模拟消息数据 =====
    const mockMessages = [
        { id: 1, name: '顾客小李', avatar: '#FF6B6B', preview: '请问这个商品还有货吗？', time: '刚刚', unread: 2, type: 'order' },
        { id: 2, name: '顾客小王', avatar: '#4ECDC4', preview: '已下单，什么时候发货？', time: '5分钟前', unread: 0, type: 'order' },
        { id: 3, name: '客服助手', avatar: '#4A90D9', preview: '您的订单已发货...', time: '1小时前', unread: 1, type: 'system' },
        { id: 4, name: '顾客小张', avatar: '#FF8C00', preview: '收到货了，质量很好！', time: '2小时前', unread: 0, type: 'order' },
        { id: 5, name: '售后客服', avatar: '#45B7D1', preview: '退款申请已处理', time: '昨天', unread: 0, type: 'service' },
        { id: 6, name: '顾客小陈', avatar: '#6C5CE7', preview: '可以优惠一点吗？', time: '昨天', unread: 0, type: 'order' },
        { id: 7, name: '系统通知', avatar: '#999', preview: '您的店铺评分已更新', time: '3天前', unread: 0, type: 'system' },
        { id: 8, name: '顾客小美', avatar: '#F06292', preview: '推荐一下新品', time: '3天前', unread: 0, type: 'order' }
    ];

    // ===== 模拟分类数据 =====
    const mockCategories = [
        { id: 1, icon: '👗', title: '服饰', desc: '精选服饰', color: '#FFE8F0' },
        { id: 2, icon: '💄', title: '美妆', desc: '护肤美妆', color: '#E8F5FF' },
        { id: 3, icon: '🏠', title: '家居', desc: '居家好物', color: '#E8FFE8' },
        { id: 4, icon: '📱', title: '数码', desc: '数码配件', color: '#F0E8FF' },
        { id: 5, icon: '🍫', title: '食品', desc: '美味食品', color: '#FFF8E8' },
        { id: 6, icon: '🎁', title: '礼品', desc: '精美礼品', color: '#FFE8E8' }
    ];

    // ===== 状态管理 =====
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

    // ===== Toast 提示 =====
    const toast = $('#toast');
    function showToast(msg, duration = 2000) {
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    // ===== 渲染商品列表（瀑布流） =====
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
                    <div class="product-price"><span class="unit">¥</span>${p.price}</div>
                    <div class="product-meta">
                        <span class="product-location">
                            <svg viewBox="0 0 24 24" width="10" height="10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#999"/></svg>
                            ${p.location}
                        </span>
                        <span class="product-want">${p.wantCount}人想要</span>
                    </div>
                </div>
            </div>
        `).join('');

        // 绑定商品点击 - 打开详情
        productList.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const product = state.products.find(p => p.id === id);
                if (product) openDetail(product);
            });
        });
    }

    // ===== 切换分类 =====
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

    // ===== Banner 轮播 =====
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

    // ===== 商品详情浮层 =====
    function openDetail(product) {
        state.currentDetailProduct = product;
        const overlay = $('#detailOverlay');
        if (!overlay) return;

        $('#detailImages').innerHTML = `<img src="${product.image}" alt="${product.title}">`;
        $('#detailPrice').innerHTML = `<span class="unit">¥</span>${product.price}<span style="font-size:13px;color:#999;font-weight:400;margin-left:8px;text-decoration:line-through">¥${product.originalPrice}</span>`;
        $('#detailTitle').textContent = product.title;
        $('#detailTags').innerHTML = product.tag ? `<span class="detail-tag">${product.tag}</span>` : '';
        $('#detailDesc').textContent = product.desc || '卖家很懒，还没有填写描述...';

        $('#detailSeller').innerHTML = `
            <div class="detail-seller-avatar" style="background:${product.sellerAvatar || '#f0f0f0'};color:#fff;font-size:18px;font-weight:600">${product.seller.charAt(0)}</div>
            <div class="detail-seller-info">
                <div class="detail-seller-name">${product.seller}</div>
                <div class="detail-seller-badge">${product.sellerCredit || '信用良好'}</div>
            </div>
            <div class="detail-seller-stats">已卖出${product.sellerSold || 0}件</div>
        `;

        // 收藏状态
        const btnFav = $('#btnFav');
        if (state.favorites.has(product.id)) {
            btnFav.classList.add('faved');
            btnFav.querySelector('span').textContent = '已收藏';
        } else {
            btnFav.classList.remove('faved');
            btnFav.querySelector('span').textContent = '收藏';
        }

        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeDetail() {
        const overlay = $('#detailOverlay');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ===== 聊天浮层 =====
    function openChat(user) {
        state.currentChatUser = user;
        state.chatMessages = [
            { text: '你好，这个宝贝还在吗？', me: true },
            { text: '在的，亲想要的话可以直接拍哦~', me: false },
            { text: '价格还能便宜点吗？', me: true },
            { text: '可以小刀哦，您说个心理价位', me: false }
        ];

        const overlay = $('#chatOverlay');
        if (!overlay) return;

        $('#chatName').textContent = user.name || user.seller || '卖家';
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

        // 模拟回复
        setTimeout(() => {
            const replies = [
                '好的，我考虑一下~',
                '可以，那就这么定了',
                '已发货，请注意查收',
                '在的，随时可以拍',
                '可以小刀，您说个价'
            ];
            state.chatMessages.push({ text: replies[Math.floor(Math.random() * replies.length)], me: false });
            renderChatMessages();
        }, 800 + Math.random() * 1200);
    }

    // ===== 渲染消息列表 =====
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

    // ===== 渲染分类列表 =====
    function renderCategories() {
        const grid = $('#categoryList');
        if (!grid) return;
        
        grid.innerHTML = mockCategories.map(cat => `
            <div class="fp-card">
                <div class="fp-card-icon">${cat.icon}</div>
                <div class="fp-card-title">${cat.title}</div>
                <div class="fp-card-desc">${cat.desc}</div>
            </div>
        `).join('');

        grid.querySelectorAll('.fp-card').forEach((card, i) => {
            card.addEventListener('click', () => {
                const category = mockCategories[i].title;
                switchPage('home');
                setTimeout(() => {
                    switchCategory(mockCategories[i].title.toLowerCase());
                }, 300);
            });
        });
    }

    // ===== 页面切换 =====
    function switchPage(page) {
        state.currentPage = page;

        $$('.page').forEach(p => p.classList.remove('active'));

        const pageMap = {
            'home': 'pageHome',
            'messages': 'pageMessages',
            'profile': 'pageProfile',
            'publish': 'pagePublish',
            'category': 'pageCategory'
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
        if (page === 'category') renderCategories();
    }

    // ===== 事件绑定 =====
    function bindEvents() {
        // 底部导航
        $$('.nav-item').forEach(item => {
            item.addEventListener('click', () => switchPage(item.dataset.page));
        });

        // 分类切换
        const categoryScroll = $('#categoryScroll');
        if (categoryScroll) {
            categoryScroll.addEventListener('click', (e) => {
                const item = e.target.closest('.category-item');
                if (item) switchCategory(item.dataset.cat);
            });
        }

        // 分类更多
        const categoryMoreBtn = $('#categoryMoreBtn');
        if (categoryMoreBtn) {
            categoryMoreBtn.addEventListener('click', () => {
                categoryScroll.scrollTo({ left: 0, behavior: 'smooth' });
                switchCategory('all');
            });
        }

        // 城市选择
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
                    showToast(`已切换到${tag.textContent}`);
                });
            });
        }

        // 详情浮层关闭
        const detailOverlay = $('#detailOverlay');
        if (detailOverlay) {
            $('#detailClose').addEventListener('click', closeDetail);
            detailOverlay.addEventListener('click', (e) => {
                if (e.target === detailOverlay) closeDetail();
            });
        }

        // 详情浮层按钮
        const btnFav = $('#btnFav');
        if (btnFav) {
            btnFav.addEventListener('click', () => {
                const product = state.currentDetailProduct;
                if (!product) return;
                if (state.favorites.has(product.id)) {
                    state.favorites.delete(product.id);
                    btnFav.classList.remove('faved');
                    btnFav.querySelector('span').textContent = '收藏';
                    showToast('已取消收藏');
                } else {
                    state.favorites.add(product.id);
                    btnFav.classList.add('faved');
                    btnFav.querySelector('span').textContent = '已收藏';
                    showToast('已加入收藏');
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
                    showToast('已提交购买意向，等待卖家确认');
                    setTimeout(closeDetail, 1500);
                }
            });
        }

        // 聊天浮层
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

        // 消息按钮
        const msgBtn = $('#msgBtn');
        if (msgBtn) {
            msgBtn.addEventListener('click', () => switchPage('messages'));
        }

        // 消息标签切换
        $$('.msg-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                $$('.msg-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderMessages(tab.dataset.tab);
            });
        });

        // 搜索
        const searchInput = $('#searchInput');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.removeAttribute('readonly');
                showToast('输入关键词搜索闲置好物');
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
                            '<div class="load-more">没有找到相关宝贝</div>';
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

        // 扫码按钮
        const scanBtn = $('#scanBtn');
        if (scanBtn) {
            scanBtn.addEventListener('click', () => showToast('扫码搜索功能开发中...'));
        }

        // 换一批按钮
        const refreshBtn = $('#refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                state.products = [...mockProducts].sort(() => Math.random() - 0.5);
                renderProducts(state.currentCategory);
                showToast('已刷新推荐');
            });
        }

        // 快捷入口
        $$('.entry-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                if (action === 'new') {
                    showToast('新品上架功能开发中...');
                } else if (action === 'hot') {
                    showToast('热销爆款功能开发中...');
                } else if (action === 'discount') {
                    showToast('限时特惠功能开发中...');
                } else if (action === 'gift') {
                    switchCategory('gift');
                } else if (action === 'about') {
                    showToast('小雅精品店 - 专注精选好物');
                } else {
                    showToast('功能开发中...');
                }
            });
        });

        // 发布按钮
        const publishBtn = $('.btn-publish');
        if (publishBtn) {
            publishBtn.addEventListener('click', () => {
                showToast('发布成功！');
                setTimeout(() => switchPage('home'), 1500);
            });
        }

        // 上传区域
        const uploadArea = $('#uploadArea');
        if (uploadArea) {
            uploadArea.addEventListener('click', () => showToast('选择图片上传'));
        }

        // 编辑资料
        const btnEditProfile = $('.btn-edit-profile');
        if (btnEditProfile) {
            btnEditProfile.addEventListener('click', () => showToast('编辑资料功能开发中...'));
        }

        // 菜单项点击
        $$('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('span').textContent;
                showToast(`${text}功能开发中...`);
            });
        });

        // 订单图标
        $$('.order-icon-item').forEach(item => {
            item.addEventListener('click', () => {
                const text = item.querySelector('span').textContent;
                showToast(`查看${text}订单`);
            });
        });

        // 返回顶部
        const btnBackTop = $('#btnBackTop');
        if (btnBackTop) {
            btnBackTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            window.addEventListener('scroll', () => {
                btnBackTop.classList.toggle('show', window.scrollY > 500);
            });
        }

        // 上拉加载更多
        const loadMore = $('#loadMore');
        if (loadMore) {
            loadMore.addEventListener('click', () => {
                showToast('加载中...');
                setTimeout(() => {
                    const extra = mockProducts.map(p => ({ ...p, id: p.id + 100 }));
                    state.products = [...state.products, ...extra];
                    renderProducts(state.currentCategory);
                    showToast('加载完成');
                }, 800);
            });
        }

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDetail();
                closeChat();
                const locationModal = $('#locationModal');
                if (locationModal) locationModal.classList.remove('show');
            }
        });

        // 状态栏时间更新
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
                    <div class="product-price"><span class="unit">¥</span>${p.price}</div>
                    <div class="product-meta">
                        <span class="product-location">
                            <svg viewBox="0 0 24 24" width="10" height="10"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#999"/></svg>
                            ${p.location}
                        </span>
                        <span class="product-want">${p.wantCount}人想要</span>
                    </div>
                </div>
            </div>
        `;
    }

    // ===== 初始化 =====
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